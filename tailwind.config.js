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
      // home
      'bg-home': "url('/src/assets/home/background-home-mobile.jpg')",
      'bg-home_tablet': "url('/src/assets/home/background-home-tablet.jpg')",
      'bg-home_desktop': "url('/src/assets/home/background-home-desktop.jpg')",
      // destination
      'bg-destination': "url('/src/assets/destination/background-destination-mobile.jpg')",
      'bg-destination_tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",
      'bg-destination_desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
      // crew
      'bg-crew': "url('/src/assets/crew/background-crew-mobile.jpg')",
      'bg-crew_tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",
      'bg-crew_desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
      // technology
      'bg-technology': "url('/src/assets/technology/background-technology-mobile.jpg')",
      'bg-technology_tablet': "url('/src/assets/technology/background-technology-tablet.jpg')",
      'bg-technology_desktop': "url('/src/assets/technology/background-technology-desktop.jpg')",
    },
    extend: {},
  },
  plugins: [],
}