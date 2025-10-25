// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PreFooterCTA from "../components/PreFooterCTA";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pawanssiddhi.in"),
  title: {
    default: "Pawanssiddhi Supplier Pvt Ltd | Industrial Engineering & Trading",
    template: "%s | Pawanssiddhi",
  },
  description:
    "Engineering services and industrial products for power, thermal and cement plants from Chandrapur, India.",
  applicationName: "Pawanssiddhi",
  publisher: "Pawanssiddhi Supplier Pvt Ltd",
  keywords: [
    "industrial engineering",
    "power plant supplies",
    "thermal power",
    "cement plant",
    "industrial automation",
    "Chandrapur",
    "Maharashtra",
    "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Pawanssiddhi Supplier Pvt Ltd",
    url: "/",
    title: "Pawanssiddhi Supplier Pvt Ltd | Industrial Engineering & Trading",
    description:
      "Engineering services and industrial products for power, thermal and cement plants from Chandrapur, India.",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Pawanssiddhi Supplier Pvt Ltd",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // add your handle if/when available
    creator: "@", // add your handle if/when available
    title: "Pawanssiddhi Supplier Pvt Ltd",
    description:
      "Industrial engineering & trading company serving power, thermal and cement plants.",
    images: ["/og-cover.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-offwhite font-body">
        {/* Skip link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-md focus:shadow"
        >
          Skip to content
        </a>

        <Header />
        <main id="main-content" className="min-h-[80vh]" role="main">
          {children}
        </main>
<PreFooterCTA />
        <Footer />
      </body>
    </html>
  );
}
