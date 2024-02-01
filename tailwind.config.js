/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        'primary': '#004953',
        'secondary': '#EF9B0F',
        'tertiary': '#74C365',
      },
    },
    screens: {

      'lg': {'max': '2023px'},
     

      'sm': {'max': '1000px'},
      
    }
  },
  plugins: [],
};