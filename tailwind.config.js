/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js, tx, tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      },
      fontFamily: {
        league: ['League Gothic', 'sans-serif']
      }
    },
  },
  plugins: [],
}

