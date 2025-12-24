/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF7F0',
          100: '#F5EFE0',
          200: '#F0D492',
          300: '#E5C76B',
          400: '#D4AF37',
          500: '#D4AF37',
          600: '#B8941E',
          700: '#9A7B18',
          800: '#7D6313',
          900: '#604B0F',
        },
        amber: {
          400: '#E5C76B',
          500: '#D4AF37',
          600: '#B8941E',
        }
      },
    },
  },
  plugins: [],
};
