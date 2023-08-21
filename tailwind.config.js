/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px',
       
      }
    },
    extend: {
      fontFamily:{
        oswald:[ 'Oswald', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive']
      },
      backgroundImage:{
        'container-bg':"[url('/images/bg.jpg')]"
      },
      colors:{
        'rosy_brown':'#c99082',
        'dim_gray' :'#6f675c',
        'ebony': '#5a5a41',
        'almond': '#F2DFCD',
        'raisin_black':'#282425',
      }
    },
  },
  plugins: [],
}

