// src/app/products/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import {
  Factory,
  Cog,
  Cpu,
  Wrench,
  GaugeCircle,
  ShieldAlert,
} from "lucide-react";

/* ── Page SEO ── */
export const metadata: Metadata = {
  title: "Products",
  description:
    "Boiler equipment, cement solutions, sensors & IoT, pumps & valves, electrical panels & automation, and safety systems for industrial plants.",
  alternates: { canonical: "https://pawanssiddhi.in/products" },
  openGraph: {
    url: "https://pawanssiddhi.in/products",
    title: "Products | Pawanssiddhi Supplier Pvt Ltd",
    description:
      "Industrial products: boiler & power plant equipment, cement plant solutions, process sensors & IoT, pumps & valves, electrical panels & automation, and safety & environment systems.",
    type: "website",
  },
};

type Product = {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const products: Product[] = [
  {
    name: "Boiler & Power Plant Equipment",
    description:
      "High-performance tubes, ESPs, BFPs, fans, and energy-efficient spares for thermal plants.",
    icon: Factory,
  },
  {
    name: "Cement Plant Solutions",
    description:
      "Kiln drives, filtration systems, and monitoring devices for cement sector innovation.",
    icon: Cog,
  },
  {
    name: "Process Sensors & IoT Devices",
    description:
      "Smart field sensors, transmitters, PLC hardware, and remote monitoring for factories.",
    icon: Cpu,
  },
  {
    name: "Industrial Pumps & Valves",
    description:
      "Durable pumps, valves, and critical flow control components for harsh environments.",
    icon: Wrench,
  },
  {
    name: "Electrical Panels & Automation",
    description:
      "Custom PLC, MCC, PCC panels; VFDs and control systems for process optimization.",
    icon: GaugeCircle,
  },
  {
    name: "Safety & Environment Systems",
    description:
      "Gas detectors, industrial alarms, fire panels, and emission-control devices.",
    icon: ShieldAlert,
  },
];

/* ── JSON-LD helper ── */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Products",
    url: "https://pawanssiddhi.in/products",
    hasPart: {
      "@type": "ItemList",
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Thing",
          name: p.name,
          description: p.description,
          url: "https://pawanssiddhi.in/contact",
        },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ProductsPage() {
  return (
    <section
      className="relative max-w-6xl mx-auto py-16 px-4"
      aria-labelledby="products-heading"
    >
      {/* Background texture + brand tints (pure CSS, no script) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(1200px 500px at 0% 0%, rgba(0,128,128,0.05), transparent 60%), radial-gradient(900px 400px at 100% 100%, rgba(255,136,0,0.05), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='1' cy='1' r='1' fill='%239AA2AE'/%3E%3C/svg%3E\")",
        }}
      />

      <JsonLd />

      <h1
        id="products-heading"
        className="text-4xl md:text-5xl font-heading font-extrabold text-primary text-center"
      >
        Our Products
      </h1>

      <p className="text-steel font-body text-lg mt-4 mb-12 text-center">
        Globally sourced, India-ready: factory supplies and technology built for
        the future of manufacturing.
      </p>

      <div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Product categories"
      >
        {products.map(({ name, description, icon: Icon }) => {
          const id = name.toLowerCase().replace(/\s+/g, "-");
          return (
            <article
              key={name}
              aria-labelledby={id}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate/10
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"
            >
              {/* Icon */}
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary
                           transition-transform duration-300 group-hover:scale-110"
                aria-hidden
              >
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>

              {/* Title */}
              <h2
                id={id}
                className="text-xl font-heading font-bold text-primary text-center"
              >
                {name}
              </h2>

              {/* Accent bar */}
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />

              {/* Description */}
              <p className="mt-4 text-base text-steel text-center font-body leading-relaxed">
                {description}
              </p>

              {/* Card CTA */}
              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-primary/30 bg-offwhite px-4 py-2 text-sm font-semibold text-primary
                             hover:bg-primary hover:text-white hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition"
                  aria-label={`Enquire about ${name}`}
                >
                  Enquire Now
                </Link>
              </div>

              {/* Hover glow ring */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-accent/0 transition
                           group-hover:ring-4 group-hover:ring-accent/20"
              />
            </article>
          );
        })}
      </div>

      {/* Section CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/contact"
          className="bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Request Full Catalogue
        </Link>
      </div>
    </section>
  );
}
