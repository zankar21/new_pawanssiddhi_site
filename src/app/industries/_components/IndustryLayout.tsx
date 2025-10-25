// ❌ remove: "use client";
import Link from "next/link";
import { type ComponentType } from "react";

type Props = {
  title: string;
  subtitle: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  heroPoints?: string[];
  offerings?: string[];
  products?: string[];
  ctaHref?: string;
};

export default function IndustryLayout({
  title,
  subtitle,
  Icon,
  heroPoints = [],
  offerings = [],
  products = [],
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="max-w-5xl mx-auto py-14 px-4">
      <header className="text-center mb-10">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-4">
          <Icon className="size-8 text-primary" />
        </span>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary">
          {title}
        </h1>
        <p className="mt-3 text-lg text-steel">{subtitle}</p>
      </header>

      {heroPoints.length > 0 && (
        <ul className="grid sm:grid-cols-2 gap-4 mb-10">
          {heroPoints.map((p) => (
            <li key={p} className="rounded-lg border border-slate-200/50 bg-offwhite p-4">
              ✅ {p}
            </li>
          ))}
        </ul>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {offerings.length > 0 && (
          <article>
            <h2 className="text-xl font-bold text-primary mb-3">What We Deliver</h2>
            <ul className="list-disc pl-5 space-y-2 text-steel">
              {offerings.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </article>
        )}
        {products.length > 0 && (
          <article>
            <h2 className="text-xl font-bold text-primary mb-3">Typical Products & Systems</h2>
            <ul className="list-disc pl-5 space-y-2 text-steel">
              {products.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </article>
        )}
      </div>

      <div className="text-center mt-12">
        <Link
          href={ctaHref}
          className="inline-block bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition"
        >
          Discuss your requirements
        </Link>
      </div>
    </section>
  );
}
