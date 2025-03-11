/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#5F89B0',
        'brand-red': '#B1413C',
        'brand-orange': '#AB5303',
        'brand-light-orange': '#DD925B',
      },
    },
  },
  plugins: [],
};