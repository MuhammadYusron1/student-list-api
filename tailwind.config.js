/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['"Roboto"', 'sans-serif'],
      secondary: ['"Open Sans"', 'sans-serif']
    },
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      },
      boxShadow: {
        level1: '0 5px 15px rgba(0, 0, 0, 0.1)',
        level2: '0 5px 15px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}

