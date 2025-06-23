/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      default: 'hsl(0, 0%, 100%)',
      'dark-blue': 'hsl(230, 35%, 7%)',
      'light-blue': 'hsl(231, 77%, 90%)',

    },

    fontFamily: {
      sans: ['Bellefair', 'sans-serif'],
      serif: ['Barlow', 'serif'],
      mono: ['Barlow Condensed', 'monospace'],
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