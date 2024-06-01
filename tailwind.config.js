/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'heading': ["Geologica", "sans-serif"],
      'body': ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        'btn': '#E01717'
      }
    },
  },
  plugins: [],
}

