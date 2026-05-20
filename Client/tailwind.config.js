/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premiumRed: '#E11D48', // Modern Crimson Red
        darkSlate: '#0F172A',  // Professional Dark
      }
    },
  },
  plugins: [],
}