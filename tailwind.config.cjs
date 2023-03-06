/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      // heading: ['Alata', 'sans-serif'],
      body: ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        prim: {
          200: '#d1bdaa',
          300: '#ae8c6b',
          400: '#8b5a2b',
          500: '#613f1e',
          600: '#2a1b0d',
        },
        acc: '#add8e6',
        txt: {
          dark: '#333333',
          light: '#5c5c5c',
        },
      },
    },
  },
  plugins: [],
};
