/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter'
      },
      backgoundImage: {
        hero: 'background-image: linear-gradient(139.95deg, #485BFF 21.01%, #FF59F8 73.4%);'
      },
      colors: {
        red: {
          500: '#F75A68',
        },
        zinc: {
          750: '#202024',
          950: '#09090A',
        },
        yellow: {
          700: '#FBA94C',
        },
        gray: {
          200: '#DBDCDD',
          500: '#737380',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        cyan: {
          500: '#81D8F7',
        },
      },
    },
    plugins: [],
  }
}