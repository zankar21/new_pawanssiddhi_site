// src/app/partners/page.tsx
"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Partner = { name: string; country: string; logo: string };

const partners: Partner[] = [
  { name: "Electrotherm India Ltd", country: "India", logo: "/vendor-logos/electrotherm.png" },
  { name: "Bharat Bijlee", country: "India", logo: "/vendor-logos/bharat-bijlee.png" },
  { name: "Astral Pipes", country: "India", logo: "/vendor-logos/astral.png" },
  { name: "Paharpur Cooling Towers", country: "India", logo: "/vendor-logos/paharpur.png" },
  { name: "Neeco Engineering", country: "India", logo: "/vendor-logos/neeco.png" },
  { name: "Marsh Automation", country: "India", logo: "/vendor-logos/marsh.png" },
  { name: "Hydro Care Engineers", country: "India", logo: "/vendor-logos/hydrocare.png" },
  { name: "ION Exchange India Ltd", country: "India", logo: "/vendor-logos/ionexchange.png" }
];

/* ─── Lightweight JSON-LD inject ─── */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Partners & Global Vendors",
    url: "https://pawanssiddhi.in/partners",
    hasPart: {
      "@type": "ItemList",
      itemListElement: partners.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: { "@type": "Organization", name: p.name }
      }))
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── Partner Card ─── */
function PartnerCard({ p }: { p: Partner }) {
  return (
    <article
      className="bg-offwhite rounded-xl shadow-md p-8 flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:border-accent border border-transparent focus-within:shadow-xl"
      aria-label={`${p.name}, ${p.country}`}
      tabIndex={-1}
    >
      <img
        src={p.logo}
        alt={`${p.name} logo`}
        className="mb-4 max-h-16 max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
        loading="lazy"
        width={240}
        height={64}
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/240x64/png?text=Logo+Unavailable";
        }}
      />
      <h2 className="text-lg font-heading font-bold text-primary text-center mb-1">
        {p.name}
      </h2>
      <p className="text-sm text-steel text-center font-body">{p.country}</p>
    </article>
  );
}

export default function PartnersPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4" aria-labelledby="partners-heading">
      <JsonLd />

      <h1
        id="partners-heading"
        className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-8 text-center"
      >
        Our Partners &amp; Global Vendors
      </h1>

      <p className="text-steel font-body text-lg mb-10 text-center">
        We collaborate and represent trusted brands for high-quality engineering, electrical, and automation products.
      </p>

      {/* Desktop Grid */}
      <div
        className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12"
        aria-label="Partner grid"
      >
        {partners.map((partner) => (
          <PartnerCard key={partner.name} p={partner} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden mb-12" aria-label="Partner carousel">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          grabCursor
          a11y={{ enabled: true }}
          keyboard={{ enabled: true }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <PartnerCard p={partner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 mt-8 mx-auto max-w-xl text-center">
        <h2 className="text-xl font-heading text-primary mb-3">Become a Vendor Partner</h2>
        <p className="text-base text-steel font-body mb-4">
          Are you a global manufacturer seeking distribution in India’s power, cement, or process industries? Let’s discuss partnership opportunities.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition"
        >
          Partner With Us
        </Link>
      </div>
    </section>
  );
}
