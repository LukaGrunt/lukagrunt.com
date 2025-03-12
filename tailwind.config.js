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
        'blue-600': '#2563eb',
        'red-600': '#dc2626',
      },
      animation: {
        'breathe': 'breathe 3s ease-in-out infinite',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};