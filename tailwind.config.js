/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-primary': '#1D64F2',
        'my-secondary': '#0B438C',
        'my-terciary': '#1B78F2',
        'my-quartenary': '#BFF205',
        'my-quintenary': '#F2F2F2',
      }
    },
  },
  plugins: [],
}

