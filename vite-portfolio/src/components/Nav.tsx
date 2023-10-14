import NavLinks from "./NavLinks"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { NavLink } from 'react-router-dom'
import Navigation from "./Navigation"

function Nav({navBarRef}: { navBarRef: React.RefObject<HTMLDivElement> }) {
  const {isModalOpen, setIsModalOpen} = useContext(GlobalContext)

  const projectLinks = ["/about-me", "/contact", "/projects"]

  console.log('isModalOpen', isModalOpen)

  const navLinks = (
    <>
      {/* <NavLink onClick={()=> isModalOpen===true && setIsModalOpen(false)} to="/about-me">About Me</NavLink>
      <NavLink onClick={()=> isModalOpen===true && setIsModalOpen(false)} to="/contact">Contact</NavLink>
      <NavLink onClick={()=> isModalOpen===true && setIsModalOpen(false)} to="/projects">Projects</NavLink> */}
      {projectLinks.map((link, index) => (
        <NavLink key={index} className="capitalize" to={link} 
        // onClick={()=> isModalOpen===true && setIsModalOpen(false)}
        onClick={()=> setIsModalOpen(!isModalOpen)}
        >
          {link.slice(1).replace("-", " ")}
        </NavLink>
      ))}
      </>)

  return (
    <>
    <div ref={navBarRef} className= {`
    ${
      isModalOpen && "filter brightness-[40%]"} bg-black font-oswald text-white z-50 w-[100%] h-[48px]  sticky top-0 text-[.75rem] border-b nav-bar flex items-center xs:text-[.85rem]`}>
      <div>
      <NavLink className={`ml-1.5 text-[1.3rem] `} to="/">Justin Canavan</NavLink>
      </div>
      
      <NavLinks  />
    </div>
    {isModalOpen && 

          <div className="fixed inset-0 z-40 h-[200px] gap-2 text-[1.3rem]">
            <div className="h-[200px] text-white mt-20 border rounded-md mx-auto bg-opacity-95 bg-slate-600 w-[90%] flex flex-col justify-evenly text-[1.6rem] items-center">
              {navLinks}

            </div>
          </div> 
          // </div>
     
        }
    </>

  )
}
export default Nav
