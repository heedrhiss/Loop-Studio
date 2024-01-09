/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans','Sans-serif'],
        alata: ['Alata']
      },
      letterSpacing: {
        widest: '.3em',
    },
    },
  },
  plugins: [],
}

