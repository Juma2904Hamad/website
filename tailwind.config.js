/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "15px",
    },

    extend: {
      screens: {
        lg: "960px",
        xl: "1200px",
      },

      fontFamily: {
        primary: ["var(--font-dmSans)", "sans-serif"],
        secondary: ["var(--font-barlow)", "sans-serif"],
      },

      colors: {
        primary: "#121315",
        secondary: "#666666",
        accent: "#ffca3b",
        border: "#d7d7d7",
      },

      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18,19,21,0.06)",
      },

      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      },
    },
  },

  plugins: [require("tailwind-animate")],
};
