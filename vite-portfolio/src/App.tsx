import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"

function App() {
  return (
    <>
     <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
