/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.jsx',
    './view/*.jsx',
    './components/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Switzer", "sans"],
        anton: ["Anton", "sans"],
      },
    },
  },
  plugins: [],
}

