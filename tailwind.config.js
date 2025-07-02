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
    backgroundImage: {
      // home
      'home': "url('/src/assets/home/background-home-mobile.jpg')",
      'home_tablet': "url('/src/assets/home/background-home-tablet.jpg')",
      'home_desktop': "url('/src/assets/home/background-home-desktop.jpg')",
      // destination
      'destination': "url('/src/assets/destination/background-destination-mobile.jpg')",
      'destination_tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",
      'destination_desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
      // crew
      'crew': "url('/src/assets/crew/background-crew-mobile.jpg')",
      'crew_tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",
      'crew_desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
      // technology
      'technology': "url('/src/assets/technology/background-technology-mobile.jpg')",
      'technology_tablet': "url('/src/assets/technology/background-technology-tablet.jpg')",
      'technology_desktop': "url('/src/assets/technology/background-technology-desktop.jpg')",
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        default: 'hsl(0, 0%, 100%)',
        'dark-blue': 'hsl(230, 35%, 7%)',
        'light-blue': 'hsl(231, 77%, 90%)',
      }
    },
  },
  plugins: [],
}