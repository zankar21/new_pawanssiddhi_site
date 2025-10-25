// src/components/Header.tsx
import Link from "next/link";
// import Image from "next/image"; // not used currently
import NavClient from "./NavClient";
import EmbossedLogo from "./EmbossedLogo";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 text-white border-b border-white/10"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-12 md:h-14 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Pawanssiddhi Supplier Pvt Ltd — Home"
            className="flex items-center"
          >
            <EmbossedLogo
              src="/logo-psspl.svg" // ensure file exists in /public
              width={220}
              height={80}
              className="h-10 md:h-11 w-auto"
              variant="raised" // try "pressed" for engraved look
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-6 font-heading text-[15px] lg:text-base"
            aria-label="Primary"
            role="navigation"
          >
            <NavClient />
          </nav>

          {/* Mobile nav trigger + menu */}
          <NavClient mobile />
        </div>
      </div>
    </header>
  );
}
