import "./index.css"
// import { useState, useEffect, useRef, RefObject, useContext } from "react"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import AboutMe from "./pages/AboutMe/AboutMe"
import ContactPage from "./pages/Contact/ContactPage"
import ProjectsPage from "./pages/Projects/ProjectsPage"
// import Resume from "./pages/Resume"
import ProjectDetails from "./pages/Projects/ProjectDetails"
// import HomePagePage from "./pages/HomePage/HomePagePage"
import FooterIcons from "./components/FooterIcons"

function App() {
  // const location = useLocation()

  return (
    <>
      <div className="flex flex-col bg-black min-h-screen">
        {/* {location.pathname === "/" ? null : <Nav />} */}
        {/* <Routes>
          <Route path="/" element={<HomePagePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path=":projectId" element={<ProjectDetails />} />
          </Route>

          <Route path="/contact" element={<ContactPage />} />
        </Routes> */}
        <Nav />
        <AboutMe />
        <ProjectsPage />
        {/* <ProjectDetails /> */}

        <ContactPage />
        <Routes>
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path=":projectId" element={<ProjectDetails />} />
          </Route>
        </Routes>
        <div
          className={`z-50 transition-opacity border-t border-white opacity-100 ease-linear duration-500 h-[56px] bg-black sticky bottom-0 w-screen flex flex-col justify-center`}
        >
          <FooterIcons />
        </div>
      </div>
    </>
  )
}

export default App
