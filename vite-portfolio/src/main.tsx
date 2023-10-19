import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { GlobalContext } from "./context/GlobalContext.tsx"
import { ColorResult, ChromePicker, Color } from "react-color"

function Root() {
  const [componentHeight, setComponentHeight] = useState<string>("")
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const ColorPicker = () => {
    const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 })

    const handleColorChange = (newColor: ColorResult) => {
      setColor(newColor.rgb)
    }

    // useEffect(() => {
    //   console.log("color", color)
    // }, [color])


    return (
      <div>
        <ChromePicker
          color={color}
          onChange={handleColorChange}
          disableAlpha={false}
        />
        <div className="text-blue-400">
          Selected RGBA Color: rgba(
          {typeof color === "object" &&
          "r" in color &&
          "g" in color &&
          "b" in color
            ? `${color.r}, ${color.g}, ${color.b}, ${color.a}`
            : "hello"}
          )
        </div>
      </div>
    )
  }

  

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalContext.Provider
          value={{
            componentHeight,
            setComponentHeight,
            screenWidth,
            setScreenWidth,
            ColorPicker,
            screenHeight,
            setScreenHeight,
            isModalOpen,
            setIsModalOpen,
        
          }}
        >
          <App />
        </GlobalContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<Root />)
