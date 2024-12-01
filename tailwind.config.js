/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        campton: ['"camptonBold"', "Arial", "sans-serif"],
        poppins: ['"Poppins"', "Georgia", "serif"],
        halvitica: ['"halvatica"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
