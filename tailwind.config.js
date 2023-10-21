/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark-bg' : '#1E1E1EED',
      'dark': '#141414',
      'dark-light': '#2A2E31',
      'main' : '#FF4863'
    },
    extend: {
      fontFamily : {
        'inter' : ['Inter', 'sans-serif']
      }

    },
    
  },
  plugins: [],
}
