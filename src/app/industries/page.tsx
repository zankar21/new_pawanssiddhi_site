// src/app/industries/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { Factory, Thermometer, Cog, FlaskConical, Car, FileText } from "lucide-react";

/* ─── Page SEO ─── */
export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "End-to-end support for power, cement, steel, chemicals, automotive and paper industries across India.",
  alternates: { canonical: "https://pawanssiddhi.in/industries" },
  openGraph: {
    url: "https://pawanssiddhi.in/industries",
    title: "Industries We Serve | Pawanssiddhi Supplier Pvt Ltd",
    description:
      "Solutions for thermal power, cement, steel & metallurgy, chemical & fertilizers, automotive, and paper & pulp.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve",
    description:
      "Trusted solutions for India’s most demanding plants—power, cement, steel, chemicals, automotive, paper.",
  },
};

const industries: {
  name: string;
  href: string; // ready for detail pages (you can create /industries/<slug>)
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}[] = [
  {
    name: "Thermal Power Plants",
    href: "/industries/thermal-power",
    Icon: Thermometer,
    description:
      "Specialized services, products, and maintenance for coal, gas, and combined cycle power plants.",
  },
  {
    name: "Cement Plants",
    href: "/industries/cement",
    Icon: Factory,
    description:
      "Turnkey supply of mechanical, electrical, and process solutions to enhance production and efficiency.",
  },
  {
    name: "Steel & Metallurgy",
    href: "/industries/steel-metallurgy",
    Icon: Cog,
    description:
      "Engineered products and solutions for steel making, rolling mills, and allied metallurgical industries.",
  },
  {
    name: "Chemical & Fertilizers",
    href: "/industries/chemical-fertilizers",
    Icon: FlaskConical,
    description:
      "Critical supplies and automation for process reliability in chemical, fertilizer, and allied plants.",
  },
  {
    name: "Automotive & Engineering",
    href: "/industries/automotive-engineering",
    Icon: Car,
    description:
      "Supply of precision hardware, maintenance products, and modernization solutions for auto factories.",
  },
  {
    name: "Paper & Pulp",
    href: "/industries/paper-pulp",
    Icon: FileText,
    description:
      "Equipment, spares, and optimization for paper mills—improving output and reducing downtime.",
  },
];

/* ─── JSON-LD (Collection + FAQ + Breadcrumb) ─── */
function JsonLd() {
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Serve",
    url: "https://pawanssiddhi.in/industries",
    about: industries.map((i) => ({ "@type": "Thing", name: i.name, url: `https://pawanssiddhi.in${i.href}` })),
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which industries does Pawanssiddhi serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Thermal power, cement, steel & metallurgy, chemical & fertilizers, automotive & engineering, and paper & pulp.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer turnkey solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We supply and integrate mechanical, electrical, automation and process solutions from assessment to commissioning and support.",
        },
      },
    ],
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pawanssiddhi.in/" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://pawanssiddhi.in/industries" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function IndustriesPage() {
  return (
    <section
      className="max-w-6xl mx-auto py-16 px-4"
      aria-labelledby="industries-heading"
      role="region"
    >
      <JsonLd />

      <header className="mb-12">
        <h1
          id="industries-heading"
          className="text-3xl md:text-5xl font-heading font-extrabold text-primary text-center"
        >
          Industries We Serve
        </h1>
        <p className="text-steel font-body text-lg md:text-xl mt-4 text-center">
          End-to-end support for India’s largest and most demanding plants.
        </p>
      </header>

      <ul
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Industry cards"
      >
        {industries.map(({ name, href, Icon, description }) => (
          <li key={name} className="list-none">
            <Link
              href={href}
              className="
                group block h-full bg-offwhite rounded-xl border border-slate-200/40
                shadow-sm p-7 focus:outline-none
                hover:shadow-lg hover:-translate-y-0.5
                transition-transform duration-200
                focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
              "
              aria-label={`${name} — read more`}
            >
              <div className="mx-auto flex w-full flex-col items-center text-center">
                {/* Icon */}
                <span
                  className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-4 motion-safe:group-hover:scale-110 transition-transform"
                  aria-hidden
                >
                  <Icon className="size-7 text-primary" />
                </span>

                {/* Title */}
                <h2 className="text-xl font-heading font-bold text-primary">
                  {name}
                </h2>

                {/* Copy */}
                <p className="mt-2 text-base text-steel font-body">
                  {description}
                </p>

                {/* CTA hint */}
                <span className="mt-4 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition"
        >
          Discuss Your Project
        </Link>
      </div>
    </section>
  );
}
