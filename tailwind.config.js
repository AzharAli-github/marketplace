/** @type {import('tailwindcss').Config} */


export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abc : ["Oswald"],
        mont: ["Montserrat"],
        logoFont: ["Lilita One"],
        headerFont: ["Rubik"],
        openSans: ["Open Sans"]
       },
       colors: {
         primaryOne: '#120C18',
         primaryTwo: '#21162B',
         primaryThree: '#201A25',
         textFadeOne: '#F8FB9F',
         textFadeTwo: '#F5FA80',
         textFadeThree:  '#D1D75D',
         lightBlue: '#15D6FF',
         white: '#FFFF',
         grayText: '#9D8AA1',
       }
    },
    
  },
  plugins: [],
}