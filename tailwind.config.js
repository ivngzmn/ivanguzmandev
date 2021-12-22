module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        graphik: "'Graphik', sans-serif",
        tuesday: "'Tuesday', serif"
      },
      backgroundImage: {
        'text-animation': 'url(/images/hero-text-motion.webp)',
        'hero-image':
          'url(https://res.cloudinary.com/dbr8xxx2m/image/upload/q_auto:eco/v1636248359/Personal-Website/john-towner-JgOeRuGD_Y4-unsplash-optimized_uxgmup.webp)'
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
