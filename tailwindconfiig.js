/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],

  theme: {
    extend: {
      /* ✅ CUSTOM BREAKPOINTS (NOW WILL WORK) */
      screens: {
        "3xl": "1680px",
        "4xl": "1920px",
        "5xl": "2240px",
        "6xl": "2560px",
      },

      fontFamily: {
        serif: ["'Abhaya Libre'", "serif"],
        sans: ["'Abhaya Libre'", "serif"],
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/line-clamp"),
  ],
};