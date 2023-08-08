/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#34C456",
      },
      backgroundImage: {
        authImage: "url('./assets/authimg.svg')",
      },
    },
  },
  plugins: [],
};
