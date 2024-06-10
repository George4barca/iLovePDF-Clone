/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./files/html/*.html'],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['graphik', 'sans']
      }
    },
    screens:{
      tablet: '480px',
      laptop: '640px',
      desktop: '1069px',
      tv: '1600px'
    }
  },
  plugins: [],
}

