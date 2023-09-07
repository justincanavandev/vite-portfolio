/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1d2d44',
        medBlue: '#3e5c76',
        lightBlue: '#748cab',
        cream: '#f0ebd8',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans'],
        'kanit': ['Kanit', 'sans']
      },
      animation: {
        'project-expand': 'project-expand .3s linear',
        'project-close': 'project-close .3s linear'

      },
      keyframes: {
        'project-expand': {
          "0%": {transform: 'translateX(-100%)'},
          "100%": {transform: 'translateX(0)'}
        },
        'project-close': {
          "0%": {transform: 'translateX(0)'},
          "100%": {transform: 'translateX(-102%)'}
        }
  
      }
    },
  },
  screens: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  plugins: [],
}
