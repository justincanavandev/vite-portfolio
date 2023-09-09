import "../animation.css"
import { useContext } from "react"

import { GlobalContext } from "../context/GlobalContext"

export default function AboutMe() {
  const { componentHeight } = useContext(GlobalContext)

  return (
    <>
      <div className="w-full" style={{ height: componentHeight }}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          facilis minus officia dolor sint exercitationem repudiandae? Vero,
          culpa tenetur! Officia iusto beatae quia facere explicabo voluptatibus
          possimus sint! Delectus, natus?
        </p>
        {/* <div className="">
          <img
            src={headshot}
            alt="Justin Canavan headshot"
            className="photo-anim h-48 rounded-full overflow-hidden photo-margin headshot object-cover mx-auto"
          ></img>
        </div> */}
      </div>
    </>
  )
}
