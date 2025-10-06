"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Turnkey Project Execution",
    description: "Complete end-to-end project management from planning to commissioning for power and industrial plants.",
    image: "/service-images/turnkey-project-execution.png",
    color: "from-primary to-accent"
  },
  {
    title: "Mechanical Installation",
    description: "Expert installation of heavy machinery, turbines, and mechanical systems for optimal performance.",
    image: "/service-images/mechanical-installation.png",
    color: "from-accent to-primary"
  },
  {
    title: "Electrical & Instrumentation",
    description: "Comprehensive electrical solutions including control panels, instrumentation, and automation systems.",
    image: "/service-images/electrical-instrumentation.png",
    color: "from-slate to-steel"
  },
  {
    title: "Civil & Structural Work",
    description: "Foundation work, structural modifications, and civil construction for industrial facilities.",
    image: "/service-images/civil-structural.png",
    color: "from-steel to-accent"
  },
  {
    title: "Maintenance & Overhaul",
    description: "Scheduled maintenance, plant shutdowns, and complete overhaul services to maximize uptime.",
    image: "/service-images/maintenance-overhaul.png",
    color: "from-primary to-steel"
  },
  {
    title: "Welding & Fabrication",
    description: "High-quality welding services and custom fabrication for industrial components and structures.",
    image: "/service-images/welding-fabrication.png",
    color: "from-accent to-primary"
  },
  {
    title: "Rotating Equipment Repair",
    description: "Specialized repair and maintenance of pumps, compressors, turbines, and other rotating machinery.",
    image: "/service-images/rotating-equipment-repair.png",
    color: "from-slate to-primary"
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency response for critical repairs and urgent maintenance requirements.",
    image: "/service-images/emergency-services.png",
    color: "from-primary to-accent"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", duration: 0.6, bounce: 0.35 } }
};

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-6 text-center">
        Our Services
      </h1>
      <p className="text-steel font-body text-lg mb-12 text-center">
        Comprehensive engineering solutions for power, cement, and industrial clients across India.
      </p>
      <motion.div 
        initial="hidden" 
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px #00808033",
              zIndex: 2
            }}
            className={`group relative overflow-hidden bg-offwhite rounded-2xl shadow-lg flex flex-col transition-all duration-300`}
          >
            <div className="h-40 w-full relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              {/* gradient overlay for image visibility */}
              <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`} />
            </div>
            <div className="flex-1 flex flex-col p-6 justify-between">
              <h2 className="text-lg font-heading font-bold text-primary mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-sm text-steel font-body text-center mb-2">{service.description}</p>
            </div>
            {/* Stylish accent bar at bottom */}
            <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-14 text-center">
        <a
          href="/contact"
          className="bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}
