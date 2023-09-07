import "./index.css"
import { useState, useEffect, useRef, RefObject } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import HomePage from "./pages/HomePage"
import { PortfolioContext } from "./context/PortfolioContext"

function App() {

  const [navBarHeight, setNavBarHeight] = useState<string>("")
  const [componentHeight, setComponentHeight] = useState<string>("") 
  const navBarRef: RefObject<HTMLDivElement> = useRef(null);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const setNavHeights = () => {
      if (navBarRef.current instanceof HTMLElement) {
        setNavBarHeight(`${navBarRef.current.clientHeight}px`);
        setComponentHeight(`calc(100vh - ${navBarRef.current.clientHeight}px)`);
      }
    };
    setNavHeights();

  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [])


  return (
    <>
     {/* <div className=''> */}
      <PortfolioContext.Provider
      value={{
        navBarHeight,
        setNavBarHeight,
        componentHeight,
        setComponentHeight,
        screenWidth,
        setScreenWidth
      }}
      >
        <BrowserRouter>
          <Nav navBarRef={navBarRef} />
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
        </PortfolioContext.Provider>
        {/* </div> */}
    </>
  )
}

export default App
