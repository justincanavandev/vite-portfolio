import "./index.css"
import { useState, useEffect, useRef, RefObject, useContext } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Nav from "./components/Nav"
import AboutMe from "./pages/AboutMe"
import ContactPage from "./pages/Contact/ContactPage"
import ProjectsPage from "./pages/Projects/ProjectsPage"
// import Resume from "./pages/Resume"
import ProjectDetails from "./pages/Projects/ProjectDetails"
import HomePagePage from "./pages/HomePage/HomePagePage"
import { GlobalContext } from "./context/GlobalContext"

function App() {


  const location = useLocation()

  return (
    <>
      <div className="flex flex-col bg-black min-h-screen">
        {location.pathname === "/" ? null : <Nav />}
        <Routes>
          <Route path="/" element={<HomePagePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path=":projectId" element={<ProjectDetails />} />
          </Route>

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
