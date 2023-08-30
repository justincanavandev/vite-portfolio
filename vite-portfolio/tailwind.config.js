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
        white: '#ffffff',
        red: '#d53c3c'
      },
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
