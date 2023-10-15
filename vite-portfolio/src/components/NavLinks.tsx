import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { NavLink } from "react-router-dom"

export default function NavLinks() {
  const projectLinks = ["/about-me", "/contact", "/projects"]
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext)

  return (
    <>
      {projectLinks.map((link, index) => (
        <NavLink
          key={index}
          className="capitalize font-oswald z-10"
          to={link}
          onClick={() => isModalOpen === true && setIsModalOpen(false)}
        >
          {link.slice(1).replace("-", " ")}
        </NavLink>
      ))}
    </>
  )
}
