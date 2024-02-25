/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      light: '#f8fafc',
      dark: '#020617',
      darker: '#0f172a',
      blue: '#4158d0',
      pink: '#c850c0',
      yellow: '#ffcc70',
    },
    extend: {},
  },
  plugins: [],
};
