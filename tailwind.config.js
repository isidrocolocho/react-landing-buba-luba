/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            'dark-greens': '#1b3a26',
            'dark-indigos': '#1c1c4d',
            'dark-purples': '#3e2e5b',
            'dark-yellows': '#9c8a2c',
            'dark-reds': '#7a282b',
            'dark-lavenders': '#333344',
            'dark-rosa': '#B97A98',
            'dark-amari': '#8C8655',
            'dark-blanco': '#2E2C29',
            'dark-maron': '#2C2523',
            'dark-rosas': '#A88B89',
        },
    },
  },
  plugins: [],
}

