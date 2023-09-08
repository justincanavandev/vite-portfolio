import "../animation.css"
import { useContext } from "react"

import { GlobalContext } from "../context/GlobalContext"

export default function AboutMe() {
  const { componentHeight } = useContext(GlobalContext)

  return (
    <>
      <div className="w-full" style={{ height: componentHeight }}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores facilis minus officia dolor sint exercitationem repudiandae? Vero, culpa tenetur! Officia iusto beatae quia facere explicabo voluptatibus possimus sint! Delectus, natus?</p>
      </div>
    </>
  )
}
