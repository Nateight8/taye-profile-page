module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom_heading: "amiri",
      },
      // fontFamily: {
      //   custom_para: "satoshi",
      // },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
