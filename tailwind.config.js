/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    gridTemplateColumns: {
      fluid: "repeat(auto-fit,minmax(15rem,1fr))",
    },
  },
  plugins: [],
};
