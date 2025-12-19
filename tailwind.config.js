/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors (STRICT)
        primary: '#F97316',        // Primary Orange
        foundation: '#0A0A0A',     // Foundation Black
        accent: '#B91C1C',         // Accent Red
        surface: '#27272A',        // Surface Dark Grey
        muted: '#71717A',          // Muted Grey
        text: '#FAFAFA',           // Text White

        // Background Depths
        'bg-deep': '#030305',      // Deepest background
        'bg-darker': '#0A0A0A',    // Foundation layer
        'bg-dark': '#18181B',      // Mid-dark
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['120px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h1': ['72px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['32px', { lineHeight: '1.3', letterSpacing: '0' }],
      },
      boxShadow: {
        'neon-orange': '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.2)',
        'neon-red': '0 0 20px rgba(185, 28, 28, 0.5), 0 0 40px rgba(185, 28, 28, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(249, 115, 22, 0.8)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
