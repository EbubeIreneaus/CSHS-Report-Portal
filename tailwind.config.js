/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secodary: '#000000',
        accent: '#15015A'
      }
    },
  },
  plugins: [],
};
