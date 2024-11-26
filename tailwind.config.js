/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "NeueHaas",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        base: "19px",
      },
      lineHeight: {
        normal: "25px",
      },
      colors: {
        primary: "#1a1a1a",
        background: "#ffffff",
      },
    },
  },
  plugins: [],
};
