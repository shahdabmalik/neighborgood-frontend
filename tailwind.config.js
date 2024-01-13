/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./src/**/**/*.{js,jsx}",
    "./src/**/**/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#ffb000',
        'primary': '#ff7800',
        'primary-dark': '#ff5200',
        'color-brown': '#562504',
        'color-light' : '#f7e1d0',
        'facebook' : '#316FF6'
      },
      aspectRatio:{
        '4/3' : '4 / 3'
      },
      screens:{
        'xs' : '450px'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class'
}

