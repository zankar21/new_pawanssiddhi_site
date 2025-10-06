import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gradient-to-r from-primary via-offwhite to-slate text-center">
      <div className="max-w-3xl mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary leading-tight mb-4">
          Engineering Services &amp; Industrial Solutions
        </h1>
        <h2 className="text-lg md:text-2xl font-body text-steel mb-8">
          Delivering reliability, innovation,<br />
          and global partnerships for manufacturing plants.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact"
            className="bg-accent hover:bg-primary hover:text-white transition text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
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
  );
}
