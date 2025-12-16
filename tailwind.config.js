/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0F5257',
          light: '#1A6B6F',
        },
        cream: '#F5EBE0',
        beige: '#E8DED1',
        sand: '#D4C5B5',
        terracotta: '#C4704B',
        pink: '#E8B4B8',
        'text-dark': '#2C3E3F',
        'text-light': '#6B7B7C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
