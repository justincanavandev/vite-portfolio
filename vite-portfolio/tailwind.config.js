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
        teal: "#2dd4bf",
        projectTeal: "rgba(45, 212, 191, 1)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans"],
        kanit: ["Kanit", "sans"],
        anton: ["Anton", "sans"],
        montserrat: ["Montserrat", "sans"],
        shadows: ["Shadows Into Light", "sans"],
        bebas: ["Bebas Neue", "sans"],
        majorMono: ["Major Mono Display", "sans"],
        monofett: ["Monofett", "sans"],
        orbitron: ["Orbitron", "sans"],
        marker: ["Permanent Marker", "sans"],
      },
      fontWeight: {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      backgroundImage: {
        "teal-gradient": "linear-gradient(#2adfc3, #1f8e7d, #163e3f)",
      },
      animation: {
        "project-expand": "project-expand .3s linear",
        "project-close": "project-close .3s linear",
        "banner-opacity-expand": "banner-opacity-expand .3s linear",
        "banner-opacity-close": "banner-opacity-close .3s linear",
        "image-opacity-open": "image-animation-expand .5s linear",
        "image-opacity-close": "image-animation-close .5s linear",
        "open-proj-card": "open-proj-card .3s linear",
        "close-proj-card": "close-proj-card .3s linear",
        "project-details-open": "project-details-open .3s forwards",
        "project-details-close": "project-details-close .3s forwards",
        "project-details-close-sm": "project-details-close-sm .3s forwards",
      },
      keyframes: {
        "project-expand": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "50%": {
            opacity: 0.2,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "project-close": {
          "0%": {
            transform: "translateY(0)",
            opacity: 1,
          },

          "50%": {
            opacity: 0.4,
          },
          "100%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
        },
        "project-details-open": {
          "0%": {
            transform: "translateY(-100%)",
          },

          "100%": {
            transform: "translateY(0)",
          },
        },
        "project-details-close": {
          "0%": {
            transform: "translateY(0)",
          },

          "100%": {
            transform: "translateY(-140%)",
          },
        },
        "project-details-close-sm": {
          "0%": {
            transform: "translateY(0)",
          },

          "100%": {
            transform: "translateY(-150%)",
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
        "image-animation-expand": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "image-animation-close": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },

  plugins: [],
}
