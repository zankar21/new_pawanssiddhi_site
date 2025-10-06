"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const partners = [
  { name: "Electrotherm India Ltd", country: "India", logo: "/vendor-logos/electrotherm.png" },
  { name: "Bharat Bijlee", country: "India", logo: "/vendor-logos/bharat-bijlee.png" },
  { name: "Astral Pipes", country: "India", logo: "/vendor-logos/astral.png" },
  { name: "Paharpur Cooling Towers", country: "India", logo: "/vendor-logos/paharpur.png" },
  { name: "Neeco Engineering", country: "India", logo: "/vendor-logos/neeco.png" },
  { name: "Marsh Automation", country: "India", logo: "/vendor-logos/marsh.png" },
  { name: "Hydro Care Engineers", country: "India", logo: "/vendor-logos/hydrocare.png" },
  { name: "ION Exchange India Ltd", country: "India", logo: "/vendor-logos/ionexchange.png" },
];

export default function PartnersPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-8 text-center">
        Our Partners & Global Vendors
      </h1>
      <p className="text-steel font-body text-lg mb-10 text-center">
        We collaborate and represent trusted brands for high-quality engineering, electrical, and automation products.
      </p>
      
      {/* Desktop Grid */}
      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-offwhite rounded-xl shadow-md p-8 flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:border-accent border border-transparent"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="mb-4 max-h-16 max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <h2 className="text-lg font-heading font-bold text-primary text-center mb-1">{partner.name}</h2>
            <p className="text-sm text-steel text-center font-body">{partner.country}</p>
          </div>
        ))}
      </div>
      
      {/* Mobile Carousel */}
      <div className="sm:hidden mb-12">
        <Swiper spaceBetween={16} slidesPerView={1.2} grabCursor={true}>
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div className="bg-offwhite rounded-xl shadow-md p-8 flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:border-accent border border-transparent">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="mb-4 max-h-16 max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <h2 className="text-lg font-heading font-bold text-primary text-center mb-1">{partner.name}</h2>
                <p className="text-sm text-steel text-center font-body">{partner.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-8 mt-8 mx-auto max-w-xl text-center">
        <h2 className="text-xl font-heading text-primary mb-3">Become a Vendor Partner</h2>
        <p className="text-base text-steel font-body mb-4">
          Are you a global manufacturer seeking distribution in India’s power, cement, or process industries? Let’s discuss partnership opportunities.
        </p>
        <a
          href="/contact"
          className="bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition"
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
}
