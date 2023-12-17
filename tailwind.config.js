/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryPeach: '#E7816B',
        primaryBlack: '#1D1C1E',
        secondaryLightPeach: '#FFAD9B',
        secondaryDarkGray: '#333136',
        secondaryLightGray: '#F1F3F5',
      },
    },
  },
  plugins: [],
}
