module.exports = {
  content: [
    './**/*.liquid', // Match all Liquid files
    './src/**/*.{js,jsx,ts,tsx}', // Match JS/TS/React files
    './assets/*.css', // Match CSS files in the assets folder
  ],
  darkMode: 'class', // Use 'media' if you prefer system-based dark mode
  theme: {
    extend: {
      height: {
        '94': '22rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};