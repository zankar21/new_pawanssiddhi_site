"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_7xp1e1v",
        "template_eul5kpm",
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        "YjxzTJoq_tmgFXdrR"
      );
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      alert("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f8fbfc] px-2 py-12">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Info and Map Side */}
        <div className="md:w-1/2 bg-slate-50 p-8 border-r border-slate-200 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-primary mb-3">Company Address</h2>

          {/* ✅ Prominent company name as a heading */}
          <h3 className="text-2xl font-extrabold text-primary leading-snug">
            Pawanssiddhi Supplier Pvt Ltd
          </h3>
          <p className="text-lg text-steel mb-6">
            <span className="block">Above One Step Salon,</span>
            <span className="block">Near Ramdeo Baba Temple, Milan Sq.,</span>
            <span className="block">Chandrapur, Maharashtra - 442402</span>
          </p>

          <h2 className="text-2xl font-bold text-primary mb-3">Email</h2>
          <a
            className="text-lg text-accent font-semibold hover:underline mb-6"
            href="mailto:info@pawanssiddhi.in"
          >
            info@pawanssiddhi.in
          </a>

          {/* Google Map Embed */}
          <div
            className="rounded-lg overflow-hidden shadow mt-6"
            style={{ width: "100%", minHeight: 220 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3750.5002556992886!2d79.2939533749882!3d19.94545343144647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAbove%20One%20Step%20Salon%2C%20Near%20Ramdeo%20Baba%20Temple%2C%20Milan%20Sq.%2C%20Chandrapur%20-%20442%20402%20(M.S.)!5e0!3m2!1sen!2sin!4v1759737440329!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Side */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 p-8 flex flex-col justify-center space-y-6"
        >
          <h2 className="text-2xl font-bold text-primary text-center mb-6">
            Send a Message
          </h2>

          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate rounded-lg focus:ring-2 focus:ring-accent transition text-lg"
            placeholder="Your Full Name"
          />

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate rounded-lg focus:ring-2 focus:ring-accent transition text-lg"
            placeholder="Your Email Address"
          />

          <input
            required
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate rounded-lg focus:ring-2 focus:ring-accent transition text-lg"
            placeholder="Subject"
          />

          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-slate rounded-lg focus:ring-2 focus:ring-accent transition resize-none text-lg"
            placeholder="Your Message"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.04 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-lg font-bold text-lg mt-4 transition ${
              loading
                ? "bg-slate text-steel cursor-not-allowed"
                : "bg-accent hover:bg-primary text-white shadow-lg"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-4 bg-green-50 border border-green-200 rounded-lg mt-2"
            >
              <p className="text-green-700 font-semibold">
                ✅ Thank you! Your message has been sent.
              </p>
              <p className="text-green-600 text-sm mt-1">We'll contact you soon.</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
