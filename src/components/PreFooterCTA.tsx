// src/components/PreFooterCTA.tsx
import Link from "next/link";

export default function PreFooterCTA() {
  return (
    <section
      className="relative prefooter-top-border overflow-hidden"
      aria-labelledby="prefooter-heading"
      role="region"
    >
      {/* animated light gradient */}
      <div aria-hidden className="absolute inset-0 prefooter-gradient animate-prefooter-gradient" />
      {/* content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid gap-4 sm:grid-cols-3 items-center">
          <h2 id="prefooter-heading" className="text-xl sm:text-2xl font-extrabold text-slate-800">
            Ready to improve plant uptime?
          </h2>

          <p className="text-slate-700 sm:col-span-1">
            Talk to us about reliability kits, O&amp;M spares, and turnkey upgrades for your line.
          </p>

          <div className="flex sm:justify-end gap-2 sm:gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-primary text-white hover:opacity-95"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-white/80 text-slate-900 ring-1 ring-slate-200 hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
