import "./index.css"
import { useState, useEffect, useRef, RefObject, useContext } from "react"
import {
  Routes,
  Route,
  useLocation,

} from "react-router-dom"
import Nav from "./components/Nav"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import ProjectsPage from "./pages/Projects/ProjectsPage"
// import Resume from "./pages/Resume"
import ProjectDetails from "./pages/Projects/ProjectDetails"
import HomePagePage from "./pages/HomePage/HomePagePage"
import { GlobalContext } from "./context/GlobalContext"


function App() {
  const { setComponentHeight } = useContext(GlobalContext)

  const [navBarHeight, setNavBarHeight] = useState<string>("")
  // const { projectId } = useParams()
  // console.log('projectId', projectId)

  const navBarRef: RefObject<HTMLDivElement> = useRef(null)

  const location = useLocation()

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
      <div className="flex flex-col bg-black min-h-screen">
        {location.pathname === "/" ? null :
         <Nav navBarRef={navBarRef} 
         />}
        <Routes>
          <Route path="/" element={<HomePagePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path=":projectId" element={<ProjectDetails />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
