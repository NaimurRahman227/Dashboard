/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-10': 'span 10 / span 10',
        'span-9': 'span 9 / span 9',
        'span-8': 'span 8 / span 8',
        'span-7': 'span 7 / span 7',
        'span-6': 'span 6 / span 6',
        'span-5': 'span 5 / span 5',
      }
    },
  },
  plugins: [],
}
