/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '768px'},
      'md':{'max':'344px'}
    }
  },
  plugins: [],
}
