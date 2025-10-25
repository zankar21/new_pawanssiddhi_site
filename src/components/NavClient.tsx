// src/components/NavClient.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/partners", label: "Vendors" },
  { href: "/contact", label: "Contact" },
];

export default function NavClient({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Treat as active only after mount (prevents SSR/CSR mismatch)
  const isActive = (href: string) =>
    mounted && (pathname === href || pathname.startsWith(`${href}/`));

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside click & Esc (mobile only)
  useEffect(() => {
    if (!mobile || !open) return;
    const onClick = (e: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobile, open]);

  if (!mobile) {
    return (
      <>
        {links.map((l) => {
          const active = isActive(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={`text-white/95 hover:text-accent hover:underline underline-offset-4 transition${
                active ? " text-accent underline decoration-2" : ""
              }`}
              prefetch
              // suppress hydration mismatch warnings on this attribute set
              suppressHydrationWarning
            >
              {l.label}
            </Link>
          );
        })}
      </>
    );
  }

  // Mobile
  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-white/20 hover:bg-white/10"
      >
        <span className="sr-only">Toggle navigation</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav"
          ref={popRef}
          className="absolute right-0 mt-2 w-56 rounded-lg bg-primary/95 backdrop-blur border border-white/10 shadow-lg"
          role="dialog"
          aria-label="Mobile primary"
        >
          <nav className="flex flex-col p-2" role="navigation">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-2 text-base hover:bg-white/10 transition${
                    active ? " text-accent" : " text-white"
                  }`}
                  suppressHydrationWarning
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
