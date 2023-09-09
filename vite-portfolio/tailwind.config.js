/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1d2d44",
        medBlue: "#3e5c76",
        lightBlue: "#748cab",
        cream: "#f0ebd8",
      },
      fontFamily: {
        oswald: ["Oswald", "sans"],
        kanit: ["Kanit", "sans"],
      },
      animation: {
        "project-expand": "project-expand .3s linear",
        "project-close": "project-close .3s linear",
        // "img-opacity-expand": "img-opacity-expand .3s linear",
        // "img-opacity-close": "img-opacity-close .3s linear",
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
        // "img-opacity-expand": {
        //   "0%": { opacity: 0.5 },
        //   "100%": { opacity: 1 },
        // },
        // "img-opacity-close": {
        //   "0%": { opacity: 1 },
          
        //   "100%": { opacity: 0.5 },
        // },
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
  screens: {
    xs: "475px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
}
