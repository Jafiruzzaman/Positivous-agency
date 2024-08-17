/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // font family
      fontFamily: {
        fontPrimary:["Space Grotesk", "sans-serif"],
      },
      // colors
      colors: {
        bgPrimary: "#F3F3F3",
        blackPrimary: "#191A23",
        greenPrimary: "#B9FF66",
      },
      container: {
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"1rem",
          md:"2rem",
          lg:"3rem",
          xl:"4rem"
        }
      },
      padding: {},
      boxShadow: {
        shadowPrimary: "0px 5px 0px 0px #191A23",
      },
      borderColor:{
        borderPrimary:"1px solid #191A23",
      }
    },
  },
  plugins: [],
};
