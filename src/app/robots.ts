// src/app/robots.ts
import type { MetadataRoute } from "next";

// Mark this route as static for static export
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://pawanssiddhi.in/sitemap.xml",
    host: "https://pawanssiddhi.in",
  };
}
