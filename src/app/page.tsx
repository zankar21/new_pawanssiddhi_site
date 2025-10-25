// src/page.tsx
import Link from "next/link";
import JsonLd from "./shared/JsonLd";

/* ── Page SEO (server component) ── */
export const metadata = {
  title: "Pawanssiddhi Supplier Pvt Ltd | Industrial Engineering & Trading",
  description:
    "Industrial engineering partner for power, thermal and cement plants — reliable sourcing, on-time delivery, and expert support.",
  alternates: { canonical: "https://pawanssiddhi.in/" },
  openGraph: {
    url: "https://pawanssiddhi.in/",
    type: "website",
    title: "Pawanssiddhi Supplier Pvt Ltd | Industrial Engineering & Trading",
    description:
      "Industrial engineering partner for power, thermal and cement plants.",
    siteName: "Pawanssiddhi Supplier Pvt Ltd",
    images: ["/og-cover.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawanssiddhi Supplier Pvt Ltd",
    description:
      "Industrial engineering & trading company serving power, thermal and cement plants.",
    images: ["/og-cover.jpg"]
  }
} as const;

export default function HomePage() {
  /* ── Structured Data ── */
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pawanssiddhi Supplier Pvt Ltd",
    url: "https://pawanssiddhi.in/",
    logo: "https://pawanssiddhi.in/logo.png",
    description:
      "Industrial engineering & trading company serving power, thermal and cement plants.",
    sameAs: [] as string[]
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pawanssiddhi Supplier Pvt Ltd",
    url: "https://pawanssiddhi.in/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://pawanssiddhi.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <JsonLd data={orgJsonLd} />
      <JsonLd data={webSiteJsonLd} />

      <main
        role="main"
        aria-labelledby="home-heading"
        className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gradient-to-r from-primary via-offwhite to-slate text-center"
      >
        <section className="w-full">
          <div className="max-w-3xl mx-auto py-16">
            <h1
              id="home-heading"
              className="text-4xl md:text-5xl font-extrabold font-heading text-primary leading-tight mb-4"
            >
              Engineering Services &amp; Industrial Solutions
            </h1>

            <h2 className="text-lg md:text-2xl font-body text-steel mb-8">
              Delivering reliability, innovation,<br />
              and global partnerships for manufacturing plants.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                aria-label="Get a quote from Pawanssiddhi Supplier Pvt Ltd"
                className="bg-accent hover:bg-primary hover:text-white transition text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                aria-label="View our services"
                className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition font-semibold px-8 py-3 rounded-full text-lg shadow-md"
              >
                Our Services
              </Link>
            </div>

            <p className="text-slate font-body text-base opacity-80 mb-2">
              Trusted by leading thermal, cement, and power plants.
            </p>
            <p className="text-steel font-heading text-sm">
              Partnering with global vendors — bringing world-class industrial products to India.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
