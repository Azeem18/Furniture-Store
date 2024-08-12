/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "374px", max: "431px" },

      md: { min: "430px", max: "730px" },

      // lg: { min: "1024px", max: "1279px" },

      // xl: { min: "1280px", max: "1535px" },

      // "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
