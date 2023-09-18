/** @type {import('tailwindcss').Config} */
export default {
  content: ["'*.{html,js,ts,tsx}'", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        darkBlue: "#1d2d44",
        medBlue: "#3e5c76",
        lightBlue: "#748cab",
        cream: "#f0ebd8",
        teal: "#2dd4bf"
      },
      fontFamily: {
        oswald: ["Oswald", "sans"],
        kanit: ["Kanit", "sans"],
        anton: ["Anton", "sans"],
        montserrat: ["Montserrat", "sans"]
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      animation: {
        "project-expand": "project-expand .3s linear",
        "project-close": "project-close .3s linear",
        "banner-opacity-expand": "banner-opacity-expand .3s linear",
        "banner-opacity-close": "banner-opacity-close .3s linear",
        
      },
      keyframes: {
        "project-expand": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "50%": {
            opacity: 0.2,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        "project-close": {
          "0%": {
            transform: "translateX(0)",
            opacity: 1,
          },
          "50%": {
            opacity: 0.4,
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
        },
        "banner-opacity-expand": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "banner-opacity-close": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        
      },
    },
  },

  plugins: [],
}
