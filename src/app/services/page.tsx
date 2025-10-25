// src/app/services/page.tsx
"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* ── Types ── */
type Service = {
  title: string;
  description: string;
  image: string;
  color: string; // tailwind gradient e.g., "from-primary to-accent"
};

/* ── Data ── */
const services: Service[] = [
  {
    title: "Turnkey Project Execution",
    description:
      "Complete end-to-end project management from planning to commissioning for power and industrial plants.",
    image: "/service-images/turnkey-project-execution.png",
    color: "from-primary to-accent",
  },
  {
    title: "Mechanical Installation",
    description:
      "Expert installation of heavy machinery, turbines, and mechanical systems for optimal performance.",
    image: "/service-images/mechanical-installation.png",
    color: "from-accent to-primary",
  },
  {
    title: "Electrical & Instrumentation",
    description:
      "Comprehensive electrical solutions including control panels, instrumentation, and automation systems.",
    image: "/service-images/electrical-instrumentation.png",
    color: "from-slate to-steel",
  },
  {
    title: "Civil & Structural Work",
    description:
      "Foundation work, structural modifications, and civil construction for industrial facilities.",
    image: "/service-images/civil-structural.png",
    color: "from-steel to-accent",
  },
  {
    title: "Maintenance & Overhaul",
    description:
      "Scheduled maintenance, plant shutdowns, and complete overhaul services to maximize uptime.",
    image: "/service-images/maintenance-overhaul.png",
    color: "from-primary to-steel",
  },
  {
    title: "Welding & Fabrication",
    description:
      "High-quality welding services and custom fabrication for industrial components and structures.",
    image: "/service-images/welding-fabrication.png",
    color: "from-accent to-primary",
  },
  {
    title: "Rotating Equipment Repair",
    description:
      "Specialized repair and maintenance of pumps, compressors, turbines, and other rotating machinery.",
    image: "/service-images/rotating-equipment-repair.png",
    color: "from-slate to-primary",
  },
  {
    title: "Emergency Services",
    description:
      "24/7 emergency response for critical repairs and urgent maintenance requirements.",
    image: "/service-images/emergency-services.png",
    color: "from-primary to-accent",
  },
];

/* ── JSON-LD ── */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services",
    url: "https://pawanssiddhi.in/services",
    hasPart: {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── Motion ── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", duration: 0.6, bounce: 0.35 } as const,
  },
};

export default function ServicesPage() {
  return (
    <section
      className="max-w-7xl mx-auto py-16 px-4"
      aria-labelledby="services-heading"
    >
      <JsonLd />

      <h1
        id="services-heading"
        className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-6 text-center"
      >
        Our Services
      </h1>

      <p className="text-steel font-body text-lg mb-12 text-center">
        Comprehensive engineering solutions for power, cement, and industrial
        clients across India.
      </p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        aria-label="Service cards"
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px #00808033",
              zIndex: 2,
            }}
            className="group relative overflow-hidden bg-offwhite rounded-2xl shadow-lg flex flex-col transition-all duration-300 focus-within:shadow-xl"
            aria-label={service.title}
            tabIndex={-1}
          >
            <div className="h-40 w-full relative">
              <img
                src={service.image}
                alt={`${service.title} illustration`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={640}
                height={160}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/640x160/png?text=Service+Image";
                }}
              />
              {/* gradient overlay for image visibility */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`}
                aria-hidden
              />
            </div>

            <div className="flex-1 flex flex-col p-6 justify-between">
              <h2 className="text-lg font-heading font-bold text-primary mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-sm text-steel font-body text-center mb-2">
                {service.description}
              </p>
            </div>

            {/* Stylish accent bar at bottom */}
            <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-14 text-center">
        <Link
          href="/contact"
          className="inline-block bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
