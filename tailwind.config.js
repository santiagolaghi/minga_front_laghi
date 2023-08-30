/** @type {import('tailwindcss').Config} */
const defaultTheme = require ('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs' : "320px", 
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage:{
        'fondoMobile': "url('./images/backgroundMobile.png')",
        'fondoLaptop': "url('./images/background.png')"
      }
    },
  },
  plugins: [],
}
