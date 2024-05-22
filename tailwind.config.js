// Update TailwindCSS configuration for v3.0
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};