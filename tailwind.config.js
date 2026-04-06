/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 8s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
