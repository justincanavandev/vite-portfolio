import { NavLink } from "react-router-dom"
import { useContext } from "react"
import "../homepage.css"
import { PortfolioContext } from "../context/PortfolioContext"

function HomePage() {
  const { componentHeight } = useContext(PortfolioContext)

  return (
    <div style={{ height: componentHeight }} className="ml-5">
      <span className="welcome">Welcome! </span>

      <p className="click-the-bubble">Want to learn more?</p>
      <NavLink className="" to="/about-me">
        <div className="bubble-div">
          <div className="bubble w-48 h-32 mt-5 text-center relative text-white"></div>
        </div>
      </NavLink>
    </div>
  )
}

export default HomePage
