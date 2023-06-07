/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*jsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        green100: '#00B37E',
        green200: '#00875F',

        gray100: '#E1E1E6',
        gray200: '#C4C4CC',
        gray300: '#8D8D99',
        gray400: '#7C7C8A',
        gray500: '#323238',
        gray600: '#202024',
        gray700: '#121214',

        reddanger: '#F75A68',

        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

