/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayUltraLight: '#FAFAFA',
        graySuperLight: '#F4F4F4',
        grayExtraLight: '#F5F5F5',
        grayMedium: '#7B7B7B',
      }
    },
  },
  plugins: [],
}