/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        lavishly: ['"Lavishly Yours"', 'cursive'],
      },
      colors: {
        darkGradientStart: "rgb(67, 91, 102)",
        darkGradientMiddle: "rgb(167, 111, 111)",
        darkGradientEnd: "rgb(234, 178, 160)",
      },
    },
  },
  plugins: [daisyui],
}

