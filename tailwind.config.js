/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        w1000: '1000px',
        w750: '750px',
        w500: '500px',
        w250: '250px',
        w100: '100px',
      },
    },
  },
  plugins: [],
}
