/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Bellefair', 'sans-serif'],
      serif: ['Barlow', 'serif'],
      mono: ['Barlow Condensed', 'monospace'],
    },
    colors: {
      'blue': {
        300: 'RGB(208,214,249)',
        900: 'RGB(11,13,23)',
      },
      default: 'RGB(255,255,255)'
    },
    extend: {},
  },
  plugins: [],
}