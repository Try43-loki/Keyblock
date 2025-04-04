/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      screens: {
        xsm: "600px",
      },
    },
  },
  plugins: [],
};
