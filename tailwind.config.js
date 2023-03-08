/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "nv-tt" : "#ECECEC",
        "lt-gy" : "#6B6B6B",
        "green" : "#29B712"
      },
      fontFamily : {
        "source" : ['Source sans pro']
      }
    },
  },
  plugins: [],
}
