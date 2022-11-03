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
    },
  },
  plugins: [],
}
