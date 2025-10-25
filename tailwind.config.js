/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  "#008080",
        accent:   "#ff8800",
        steel:    "#334155",
        slate:    "#64748b",
        offwhite: "#f7fafb",
      },
      fontFamily: {
        heading: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "\"Helvetica Neue\"",
          "Arial",
          "\"Noto Sans\"",
          "\"Apple Color Emoji\"",
          "\"Segoe UI Emoji\"",
          "\"Segoe UI Symbol\"",
        ],
        body: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "\"Helvetica Neue\"",
          "Arial",
          "\"Noto Sans\"",
          "\"Apple Color Emoji\"",
          "\"Segoe UI Emoji\"",
          "\"Segoe UI Symbol\"",
        ],
      },
    },
  },
  plugins: [],
};
