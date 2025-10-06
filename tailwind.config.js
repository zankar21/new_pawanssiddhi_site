// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",         // Main Next.js app directory
    "./src/components/**/*.{js,ts,jsx,tsx}",  // Components directory
    "./src/sections/**/*.{js,ts,jsx,tsx}",    // Sections (if you use)
    "./src/pages/**/*.{js,ts,jsx,tsx}",       // Pages (if you use)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008080",         // Deep Teal
        accent: "#FF8800",          // Vibrant Orange
        steel: "#303B4B",           // Steel Gray
        slate: "#63717C",           // Slate
        offwhite: "#F6F9FA",        // Off-White
        charcoal: "#23272F",        // Rich Charcoal
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
