// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // creates /out for static hosting
  images: { unoptimized: true }, // important when using <Image/> on static hosts
  trailingSlash: false,      // keep /page.html paths; change to true if you prefer /page/
  reactStrictMode: true,
};

module.exports = nextConfig;
