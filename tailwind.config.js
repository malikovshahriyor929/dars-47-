/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans :"Vela Sans"
      },
      colors: {
        textcolor: "#232323",
        gray36: "#363636",
        brandred: "#8a0f0c",
        brandblue: "#0f265c",
        hover: "#223e81",
        focused: "#0b1f4f",
        lightgray7a: "#7a7a7a",
        invisibletext: "#a0a0a0",
      },
    },
  },
  plugins: [],
};
