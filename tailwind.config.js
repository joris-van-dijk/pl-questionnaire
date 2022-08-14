/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "{layouts,pages,components}/**/*.{js,jsx}"
  ],  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ]
}
