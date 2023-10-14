import { NavLink } from "react-router-dom"
import { Spin as Hamburger } from "hamburger-react"
import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useLocation } from "react-router-dom"
import  Navigation from "./Navigation"


export default function NavLinks() {
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext)

  const location = useLocation()

  // console.log('location', location.pathname)

  // const projectLinks = ["/about-me", "/contact", "/projects"]

  // const navLinks = (
  //   <>
  //     {projectLinks.map((link, index) => (
  //       <NavLink key={index} className="capitalize" to={link} onClick={()=> isModalOpen===true && setIsModalOpen(false)}>
  //         {link.slice(1).replace("-", " ")}
  //       </NavLink>
  //     ))}
  //   </>
  // )

  return (
    <>
      <div className="flex items-end justify-evenly ml-auto mr-2 ">
        <div className="md:hidden z-50">
          <Hamburger
            toggled={isModalOpen}
            rounded
            toggle={setIsModalOpen}
            size={29}
          />
        </div>

        <div className="gap-2 font-oswald hidden md:flex text-[1.3rem] ">
  
          <Navigation/>
        </div>
   
      </div>
    </>
  )
}
