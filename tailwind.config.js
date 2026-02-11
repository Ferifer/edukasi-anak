/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B9D",
        secondary: "#4ECDC4",
        accent: "#FFE66D",
        success: "#95E1D3",
        purple: "#C394F4",
      },
      fontFamily: {
        comic: ["Comic Sans MS", "cursive"],
      },
    },
  },
  plugins: [],
};
