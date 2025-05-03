/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'sand': {
          50: '#fefbf7',
          100: '#f8f1e5',
          200: '#f1e0c5',
          300: '#e6cfa4',
          400: '#dbb978',
          500: '#cfa057',
          600: '#c28339',
          700: '#a1672e',
          800: '#83542b',
          900: '#6b4628',
          950: '#3a2414',
        },
      },
      animation: {
        'scanline': 'scanline 2s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(300%)' },
        }
      }
    },
  },
  plugins: [],
};