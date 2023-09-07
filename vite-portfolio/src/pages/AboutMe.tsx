import "../animation.css"
import { useContext } from "react"

import { PortfolioContext } from "../context/PortfolioContext"

export default function AboutMe() {
  const { componentHeight } = useContext(PortfolioContext)

  return (
    <>
      <div className="w-full" style={{ height: componentHeight }}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores facilis minus officia dolor sint exercitationem repudiandae? Vero, culpa tenetur! Officia iusto beatae quia facere explicabo voluptatibus possimus sint! Delectus, natus?</p>
      </div>
    </>
  )
}
