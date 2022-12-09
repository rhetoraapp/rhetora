/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anek: ['"Anek Latin"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      ...colors,
      main: "#050038",
      minor: "#FF9933",
      minorlight:"#FFA74F",
      light: "#B9BEC7",
      bglight: "#F9F9F9",
      subheading: "#454545",
    },
  },
  plugins: [require("flowbite/plugin")],
};
