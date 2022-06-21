const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', ...fontFamily.sans],
        title: ['Basement', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
};
