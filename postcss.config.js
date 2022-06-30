/* eslint-disable import/no-extraneous-dependencies */
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {}
  }
}
