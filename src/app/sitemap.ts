// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pawanssiddhi.in";

  const paths = [
    "/", "/about", "/services", "/products", "/industries",
    "/industries/thermal-power",
    "/industries/cement",
    "/industries/steel-metallurgy",
    "/industries/chemical-fertilizers",
    "/industries/automotive-engineering",
    "/industries/paper-pulp",
    "/partners",
    "/contact",
  ];

  return paths.map((p) => ({
    url: `${base}${p}`,
    // Optional fixed date string to avoid dynamic build-time calls
    lastModified: new Date("2025-10-01"),
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
