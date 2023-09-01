import "./index.css"
import { useState, useEffect, useRef, RefObject } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import { PortfolioContext } from "./context/PortfolioContext"
// import type {PortfolioContextType} from "./types/types"


function App() {

  const [navBarHeight, setNavBarHeight] = useState<string>("")
  const [componentHeight, setComponentHeight] = useState<string>("") 
  const navBarRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const setNavHeights = () => {
      if (navBarRef.current instanceof HTMLElement) {
        setNavBarHeight(`${navBarRef.current.clientHeight}px`);
        setComponentHeight(`calc(100vh - ${navBarRef.current.clientHeight}px)`);
      }
    };
    setNavHeights();

  }, []);


  return (
    <>
     <div className=''>
      <PortfolioContext.Provider
      value={{
        navBarHeight,
        setNavBarHeight,
        componentHeight,
        setComponentHeight
      }}
      >
        <BrowserRouter>
          <Nav navBarRef={navBarRef} />
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
        </PortfolioContext.Provider>
        </div>
    </>
  )
}

export default App
