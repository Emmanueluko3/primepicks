/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#24A843",
        customLightGreen: "rgba(52, 196, 86, 0.10)",
      },
      backgroundImage: {
        authImage: "url('./assets/authimg.svg')",
      },
    },
  },
  plugins: [],
};
