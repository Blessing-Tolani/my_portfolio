/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:'#A1A1A1',
        'dark-gray': '#1E1E1E'
      },
      borderColor: {
        default: '#2e2e2e'
      },
      fontFamily:{
        playfair: ['Playfair Display', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      screens: {
        xlMax: { max: '1279px' },
        lgMax: { max: '1023px' },
        mdMax: { max: '767px'},
        smMax: { max: '639px' },
      },
      
    },
  },
  plugins: [],
};
