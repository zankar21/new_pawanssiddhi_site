"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-heading text-2xl font-extrabold tracking-wide">
        PSSPL
      </Link>
      <nav className="flex gap-6 font-heading text-lg">
        <Link href="/about" className="hover:text-accent transition">About</Link>
        <Link href="/services" className="hover:text-accent transition">Services</Link>
        <Link href="/products" className="hover:text-accent transition">Products</Link>
        <Link href="/industries" className="hover:text-accent transition">Industries</Link>
        <Link href="/partners" className="hover:text-accent transition">Vendors</Link>
        <Link href="/contact" className="hover:text-accent transition">Contact</Link>
      </nav>
    </header>
  );
}
