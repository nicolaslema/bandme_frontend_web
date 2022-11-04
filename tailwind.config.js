/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container:{
      center: true,
      padding: "1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl" : "1124px",
      }
    },
    fontFamily:{
      Poppins: ["Poppins, sans-serif"],
    },
    extend: {
      colors:{
        "bandme_orange" :"#e09016",
        "bandme_dark" : "#212121",
        "clr" : "#04fc43"
        
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
