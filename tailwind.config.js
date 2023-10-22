/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  
    extend: {
      fontFamily : {
        'inter' : ['Inter', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        'dark-bg' : '#1E1E1E',
        'dark': '#141414',
        'dark-light': '#2A2E31',
        'main' : '#FF4863',
        'white' : '#FFFFFF'
      },

    },
    
  },
  plugins: [],
}
