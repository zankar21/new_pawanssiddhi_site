// src/app/contact/page.tsx
"use client";

import {
  useMemo,
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

/* JSON-LD helper */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  reason: "Sales" | "Support" | "Quotation" | "Careers" | "Other";
  budget: "Below ₹1L" | "₹1L–₹5L" | "₹5L–₹25L" | "₹25L+";
  attachmentUrl?: string;
  website?: string; // honeypot
};
type Touched = Partial<Record<keyof FormState, boolean>>;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    reason: "Sales",
    budget: "Below ₹1L",
    attachmentUrl: "",
    website: "",
  });
  const [touched, setTouched] = useState<Touched>({});
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "err">(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1200); // anti-spam soft gate
    return () => clearTimeout(t);
  }, []);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Please add a subject.";
    if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    if (form.attachmentUrl && !/^https?:\/\//i.test(form.attachmentUrl))
      e.attachmentUrl = "Provide a valid https link or leave blank.";
    if (form.website && form.website.trim().length > 0)
      e.website = "Spam detected.";
    return e;
  }, [form]);

  const showError = (field: keyof FormState) =>
    (touched[field] || triedSubmit) && !!errors[field];

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-lg border transition text-lg focus:ring-2 focus:ring-accent
     ${hasError ? "border-red-400" : "border-slate"}`;

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setTouched((t) => ({ ...t, [e.target.name as keyof FormState]: true }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(null);
    setTriedSubmit(true);

    if (Object.keys(errors).length > 0) {
      setSubmitted("err");
      return;
    }

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_7xp1e1v";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_eul5kpm";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YjxzTJoq_tmgFXdrR";

    const composedSubject =
      form.subject?.trim() ||
      `[${form.reason}] Inquiry ${
        form.budget ? `· Budget ${form.budget}` : ""
      }`.trim();

    setLoading(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          title: composedSubject,
          message: `${form.message}\n\nReason: ${form.reason}\nBudget: ${form.budget}\nAttachment: ${
            form.attachmentUrl || "—"
          }`,
        },
        { publicKey }
      );
      setSubmitted("ok");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        reason: "Sales",
        budget: "Below ₹1L",
        attachmentUrl: "",
        website: "",
      });
      setTouched({});
      setTriedSubmit(false);

      if (typeof window !== "undefined") {
        setTimeout(() => {
          window.location.assign("/thank-you?from=contact");
        }, 1000);
      }
    } catch {
      setSubmitted("err");
    } finally {
      setLoading(false);
    }
  }

  const localBusiness = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Pawanssiddhi Supplier Pvt Ltd",
      image: "https://pawanssiddhi.in/logo.png",
      url: "https://pawanssiddhi.in/",
      email: "info@pawanssiddhi.in",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Above One Step Salon, Near Ramdeo Baba Temple, Milan Sq.",
        addressLocality: "Chandrapur",
        addressRegion: "Maharashtra",
        postalCode: "442402",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@pawanssiddhi.in",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "18:30",
        },
      ],
      areaServed: "India",
      priceRange: "₹₹",
    }),
    []
  );

  return (
    <>
      <JsonLd data={localBusiness} />

      <section className="min-h-screen bg-[#f8fbfc] py-10 px-3">
        <div className="mx-auto max-w-6xl">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
            {/* LEFT: Info & Map (sticky on desktop) */}
            <aside className="bg-slate-50 border-r border-slate-200 p-8 md:p-10 md:sticky md:top-20 self-start">
              <h2 className="text-3xl font-extrabold text-primary mb-2">
                Get in touch
              </h2>
              <p className="text-steel mb-6">
                Tell us about your plant. We usually reply within{" "}
                <span className="font-semibold text-primary">24 hours</span>.
              </p>

              <h3 className="text-xl font-extrabold text-primary leading-snug">
                Pawanssiddhi Supplier Pvt Ltd
              </h3>
              <address className="not-italic text-base text-steel mb-4">
                <span className="block">Above One Step Salon,</span>
                <span className="block">
                  Near Ramdeo Baba Temple, Milan Sq.,
                </span>
                <span className="block">
                  Chandrapur, Maharashtra — 442402
                </span>
              </address>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                <span className="inline-flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full ring-1 ring-slate-200">
                  ✅ Quality Focus
                </span>
                <span className="inline-flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full ring-1 ring-slate-200">
                  ⚡ Fast Response
                </span>
              </div>

              <div className="rounded-lg overflow-hidden shadow relative">
                <div className="relative w-full aspect-[4/3]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5005631624704!2d79.2935944448267!3d19.945440488035928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d5f0e9610533%3A0xfd415373132ea7d9!2sPawanssiddhi%20Supplier%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1761366450430!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", inset: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location Map"
                  />
                </div>

                <div className="absolute left-2 bottom-2 flex gap-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maps.google.com/?q=Pawanssiddhi+Supplier+Pvt+Ltd+Chandrapur"
                    className="bg-white/95 hover:bg-white rounded-md px-3 py-1.5 text-sm font-medium shadow ring-1 ring-slate-200"
                  >
                    Open in Maps
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/dir/?api=1&destination=Pawanssiddhi%20Supplier%20Pvt%20Ltd%20Chandrapur"
                    className="bg-primary/90 hover:bg-primary text-white rounded-md px-3 py-1.5 text-sm font-semibold shadow"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </aside>

            {/* RIGHT: Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-10"
              noValidate
            >
              <h2 className="text-3xl font-extrabold text-primary text-center mb-6">
                Send a Message
              </h2>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Two-column grid for compactness */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Full Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass(showError("name"))}
                    placeholder="Your Full Name"
                    autoComplete="name"
                  />
                  {showError("name") && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.name as string}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass(showError("email"))}
                    placeholder="Your Email Address"
                    autoComplete="email"
                  />
                  {showError("email") && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.email as string}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="reason" className="sr-only">
                    Reason
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass()}
                  >
                    <option>Sales</option>
                    <option>Support</option>
                    <option>Quotation</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="sr-only">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass()}
                  >
                    <option>Below ₹1L</option>
                    <option>₹1L–₹5L</option>
                    <option>₹5L–₹25L</option>
                    <option>₹25L+</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  required
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass(showError("subject"))}
                  placeholder="Subject"
                />
                {showError("subject") && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.subject as string}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={inputClass(showError("message")) + " resize-none"}
                  placeholder="Your Message"
                />
                {showError("message") && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.message as string}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="attachmentUrl" className="sr-only">
                  Attachment link (optional)
                </label>
                <input
                  id="attachmentUrl"
                  type="url"
                  name="attachmentUrl"
                  value={form.attachmentUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass(showError("attachmentUrl"))}
                  placeholder="Attachment link (Drive/OneDrive) — optional"
                />
                {showError("attachmentUrl") && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.attachmentUrl as string}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={loading || !ready}
                whileHover={{ scale: loading || !ready ? 1 : 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-bold text-lg mt-6 transition ${
                  loading || !ready
                    ? "bg-slate text-steel cursor-not-allowed"
                    : "bg-accent hover:bg-primary text-white shadow-lg"
                }`}
              >
                {loading ? "Sending..." : ready ? "Send Message" : "Preparing…"}
              </motion.button>

              {submitted === "ok" && (
                <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg mt-3">
                  <p className="text-green-700 font-semibold">
                    ✅ Thank you! Your message has been sent.
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    Redirecting to the thank-you page…
                  </p>
                </div>
              )}

              {submitted === "err" && (
                <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg mt-3">
                  <p className="text-red-700 font-semibold">
                    ⚠️ Unable to send your message.
                  </p>
                  <p className="text-red-600 text-sm mt-1">
                    Please check the form and try again, or email{" "}
                    <a className="underline" href="mailto:info@pawanssiddhi.in">
                      info@pawanssiddhi.in
                    </a>
                    .
                  </p>
                </div>
              )}
            </motion.form>
          </div>

          {/* FAQ full-width */}
          <div className="bg-white rounded-2xl shadow mt-6 p-6 md:p-8">
            <h3 className="text-xl font-bold text-primary mb-3">FAQs</h3>
            <details className="group border-b border-slate-200 py-3">
              <summary className="cursor-pointer font-medium text-steel group-open:text-primary">
                Do you serve outside Maharashtra?
              </summary>
              <p className="mt-2 text-slate-600">
                Yes—our supply & services cover plants across India.
              </p>
            </details>
            <details className="group border-b border-slate-200 py-3">
              <summary className="cursor-pointer font-medium text-steel group-open:text-primary">
                Can you provide turnkey solutions?
              </summary>
              <p className="mt-2 text-slate-600">
                We handle mechanical, electrical, and automation—from
                assessment to commissioning.
              </p>
            </details>
            <details className="group py-3">
              <summary className="cursor-pointer font-medium text-steel group-open:text-primary">
                How quickly do you respond?
              </summary>
              <p className="mt-2 text-slate-600">
                Within one business day for most queries.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
