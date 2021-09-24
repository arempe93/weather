const { text, ...colors } = require('./theme/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/global.css', './src/**/*.{tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      white: 'white',
      black: 'black',
      ...colors,
    },
    textColor: {
      current: 'currentColor',
      inherit: 'inherit',
      white: 'white',
      black: 'black',
      ...colors,
      ...text,
    },
    screens: {
      phone: { max: '639px' },
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
      largeDesktop: '1536px',

      allowsMotion: { raw: '(prefers-reduced-motion: no-preference)' },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
