import "./index.css"
import { useState, useEffect, useRef, RefObject, useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
// import Portfolio from "./pages/Portfolio/Portfolio"
import PortfolioPage from "./pages/Projects/ProjectsPage"
import Resume from "./pages/Resume"
import HomePage from "./pages/HomePage"
import { GlobalContext } from "./context/GlobalContext"

function App() {
  const { setComponentHeight } = useContext(GlobalContext)

  const [navBarHeight, setNavBarHeight] = useState<string>("")

  const navBarRef: RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    const setNavHeights = () => {
      if (navBarRef.current instanceof HTMLElement) {
        setNavBarHeight(`${navBarRef.current.clientHeight}px`)
        setComponentHeight(`calc(100vh - ${navBarRef.current.clientHeight}px)`)
      }
    }
    setNavHeights()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Nav navBarRef={navBarRef} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
