module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'text-animation':
          'url(https://i.giphy.com/media/HZwazRfmuiVSSBjoGw/source.gif)',
        'hero-image':
          'url(https://res.cloudinary.com/dbr8xxx2m/image/upload/q_auto/v1636079635/Personal-Website/john-towner-JgOeRuGD_Y4-unsplash_nzxx06.jpg)'
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
