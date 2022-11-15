/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        preto: "#464646",
        preto3: "#EAF2FD",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
