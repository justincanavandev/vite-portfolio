import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
// import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

export default function NavLinks() {
  const projectLinks = ["/#about-me", "/#contact", "/#projects"]
  const { isModalOpen, setIsModalOpen, openOrClose, setOpenOrClose } =
    useContext(GlobalContext)

  return (
    <>
      {projectLinks.map((link, index) => (
        <Link
          key={index}
          className="capitalize font-oswald no-underline text-white z-10"
          to={link}
          onClick={() => {
            isModalOpen === true && setIsModalOpen(false)
            setOpenOrClose(!openOrClose)
            // setIsModalOpen(!isModalOpen)
          }}
        >
          {link.slice(2).replace("-", " ")}
        </Link>
      ))}
    </>
  )
}
