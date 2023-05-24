/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      // heading: [],
      sans: ["Josefin Sans", "sans-serif"],
      alata: "Alata",
    },
    extend: {
      // colors: {
      //   prim: {
      //     200: "#2c89ac",
      //     300: "#4496b5",
      //     400: "#26bba4",
      //     500: "#116382",
      //     600: "#0d4a62",
      //   },
      //   //   sec: '#818fff',
      //   txt: {
      //     dark: "#212529",
      //     light: "#666",
      //   },
      // },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
