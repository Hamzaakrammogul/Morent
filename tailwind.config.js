/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      height: {
        '100': '6rem',
        '110': '13rem',
        '111': '21rem'
      },
      
    },
    colors: {

      dusty: 'hsl(220, 20%, 97%)',
      whity: 'hsl(0, 0%, 100%)',
      darkSky: 'hsl(225, 80%, 56%)',
      lightSky: 'hsl(211, 100%, 67%)',
      darkGray: 'hsl(219, 33%, 36%)',
      lightGray: 'hsl(216, 27%, 66%)',
      footerGray: 'hsl(0, 0%, 61%)',
      heartRed: 'hsl(0, 83%, 59%)'

    }
  },
  plugins: [],
}