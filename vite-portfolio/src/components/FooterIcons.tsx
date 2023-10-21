import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"

export default function FooterIcons() {
  const { footerIcons, screenHeight } = useContext(GlobalContext)
  const location = useLocation()

  return (
    <div className="flex justify-center z-40">
      <div
        className={`flex ${screenHeight < 650 ? location.pathname==="/projects" && "mt-[2rem] sm:mt-[.9rem]" : "absolute bottom-2.5"}`}
      >
        {footerIcons.map((icon, index) => (
          <div
            key={index}
            className={`mx-3 text-white text-[1.5rem] xs:text-[1.8rem] z-10 md:mx-5`}
          >
            <FontAwesomeIcon className="z-10" size="lg" icon={icon} />
          </div>
        ))}
      </div>
    </div>
  )
}