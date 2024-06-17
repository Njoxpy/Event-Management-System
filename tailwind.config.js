/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        eventManagement:{
          "darkGray":"#333333",
          "black":"#000000",
          "textHover":"#F5A623",
          "white":"#FFFFFF",
          "lightGray":"#F9F9F9",
          "orange":"#F5A623",
          "accent":"#E5941F"
        }
      }
    },
  },
  plugins: [],
}