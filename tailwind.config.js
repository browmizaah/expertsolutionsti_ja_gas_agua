/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans':['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{"home": "url('/img/img-bg02.png')"}
    },
  },
  plugins: [],
}