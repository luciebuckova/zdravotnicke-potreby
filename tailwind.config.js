/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      hamburgerBg: "#f8fafc",
      mainBg: "#f1f5f9",
      textColor: "#0f172a",
      blue: "#2F46BC",
      pink: "#94148C",
    },
    extend: {},
  },
  plugins: [],
};
