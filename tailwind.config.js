/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#f59e0b',
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  plugins: [],
};
