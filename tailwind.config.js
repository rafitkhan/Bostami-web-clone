/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'popins': ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
    extend: {
      colors: {
        'normalColor': '#fff',
      },
    },
  },
  plugins: [],
}
}