/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Your exact color palette
        accent: "#E54D2E", // Terracotta
        accentLight: "#F6B352", // Mustard
        dark: "#121212", // Dark mode background
      },
      fontFamily: {
        // Your custom fonts
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};