/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-semi-transparent': 'rgba(0, 0, 0, 0.7)',
        customGray: 'rgba(22, 22, 22, 0.7)',
        redBtn: 'rgb(229, 9, 20)',
        customGray2: 'rgba(128, 128, 128, 0.4)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

