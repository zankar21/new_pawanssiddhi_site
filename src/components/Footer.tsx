// src/components/Footer.tsx
import Link from "next/link";
import { Mail, MapPin, Linkedin, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      // Lighter two-tone background. No overlay layers.
      className="relative mt-0 -mt-px text-white overflow-hidden border-t border-white/10 
             bg-gradient-to-br from-[#1f1f1f] via-[#343a40] to-[#5a5f63]"
      role="contentinfo"
    >
      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand + blurb */}
          <section className="lg:col-span-3">
            <Link
              href="/"
              aria-label="Pawanssiddhi — Home"
              className="inline-block text-xl font-extrabold tracking-wide"
            >
              Pawanssiddhi<span className="sr-only"> Supplier Pvt Ltd</span>
            </Link>

            <p className="mt-2 text-white/85 text-[13px] leading-6">
              Industrial engineering & trading — reliability across thermal power, cement,
              steel, chemicals, automotive and paper industries.
            </p>

            <ul className="mt-3 flex items-center gap-2.5" aria-label="Social media">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15"
                >
                  <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15"
                >
                  <Youtube className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15"
                >
                  <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </section>

          {/* Company links (2 columns) */}
          <nav className="lg:col-span-3" aria-label="Company">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Company
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-y-1.5 gap-x-6 text-[13px] leading-6">
              <li><Link className="hover:underline underline-offset-4" href="/about">About</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/services">Services</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/products">Products</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/industries">Industries</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/partners">Vendors</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Industries links (2 columns) */}
          <nav className="lg:col-span-3" aria-label="Industries">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Industries
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-y-1.5 gap-x-6 text-[13px] leading-6">
              <li><Link className="hover:underline underline-offset-4" href="/industries/thermal-power">Thermal Power</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/industries/cement">Cement</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/industries/steel-metallurgy">Steel & Metallurgy</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/industries/chemical-fertilizers">Chemical & Fertilizers</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/industries/automotive-engineering">Automotive</Link></li>
              <li><Link className="hover:underline underline-offset-4" href="/industries/paper-pulp">Paper & Pulp</Link></li>
            </ul>
          </nav>

          {/* Reach us (wider column) */}
          <section className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Reach us
            </h3>

            <address className="not-italic mt-3 text-[13px] text-white/90 space-y-2.5 leading-6">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none opacity-80" aria-hidden="true" />
                <span className="space-y-0.5 lg:max-w-[42ch]">
                  <span className="block">
                    Above One Step Salon, Near Ramdeo Baba Temple, Milan Sq.
                  </span>
                  <span className="block">
                    Chandrapur, Maharashtra — 442402, IN
                  </span>
                </span>
              </p>

              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-none opacity-80" aria-hidden="true" />
                <a
                  href="mailto:info@pawanssiddhi.in"
                  className="hover:underline underline-offset-4"
                >
                  info@pawanssiddhi.in
                </a>
              </p>
            </address>

            <div className="mt-3 flex gap-2">
              <a
                href="https://maps.google.com/?q=Pawanssiddhi+Supplier+Pvt+Ltd+Chandrapur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-white/10 hover:bg-white/20 px-2.5 py-1.5 text-xs ring-1 ring-white/15"
              >
                View Map
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Pawanssiddhi%20Supplier%20Pvt%20Ltd%20Chandrapur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-accent hover:bg-white/20 px-2.5 py-1.5 text-xs ring-1 ring-white/15"
              >
                Directions
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom bar (dense) */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/85">
            © {year} <span className="font-semibold">Pawanssiddhi Supplier Pvt Ltd</span>. All rights reserved.
          </p>

          <nav className="flex items-center gap-3 text-[13px]" aria-label="Legal">
            <Link href="/privacy" className="text-white/85 hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <span className="opacity-40">•</span>
            <Link href="/terms" className="text-white/85 hover:underline underline-offset-4">
              Terms of Use
            </Link>
            <span className="opacity-40">•</span>
            <a href="#main-content" className="text-white/85 hover:text-white">
              Top
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
