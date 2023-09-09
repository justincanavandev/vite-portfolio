import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { GlobalContext } from "./context/GlobalContext.tsx"

function Root() {
  const [componentHeight, setComponentHeight] = useState<string>("")
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <React.StrictMode>
      <GlobalContext.Provider
        value={{
          componentHeight,
          setComponentHeight,
          screenWidth,
          setScreenWidth,
        }}
      >
        <App />
      </GlobalContext.Provider>
    </React.StrictMode>
  )
}
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Root />);
