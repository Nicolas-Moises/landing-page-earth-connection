/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      blur: {
        full: '184px',
      },
      backgoundImage: {
        hero: 'background-image: linear-gradient(139.95deg, #485BFF 21.01%, #FF59F8 73.4%);',
        special:
          'background:linear-gradient(135deg, #818cf8 20%, #8b5cf6 23.50%, #d8b4fe 50%);',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        gradient: {
          from: {
            backgoundImage: '0% 50%',
          },
          via: {
            backgoundImage: '100% 50%',
          },
          to: {
            backgoundImage: '0% 50%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'animation-text': 'gradient 8s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
