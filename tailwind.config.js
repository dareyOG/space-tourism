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
    backgroundImage: {
      'bg-home': "url('/src/assets/home/background-home-mobile.jpg')",
      'bg-home_tablet': "url('/src/assets/home/background-home-tablet.jpg')",
      'bg-home_desktop': "url('/src/assets/home/background-home-desktop.jpg')",
      'bg-destination': "url('/src/assets/destination/background-destination-desktop.jpg')",
      'bg-crew': "url('/src/assets/crew/background-crew-desktop.jpg')",
    },
    extend: {},
  },
  plugins: [],
}