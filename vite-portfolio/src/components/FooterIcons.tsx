import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"

export default function FooterIcons() {
  const { footerIcons, screenHeight } = useContext(GlobalContext)
  const location = useLocation()

  return (
    <div className="flex justify-center sm:mb-3 sm:items-end sm:mx-auto  md:mt-0 z-40">
      <div
        className={`flex ${screenHeight < 650 ? location.pathname==="/projects" && "mt-[5.3rem] xs:mt-[5.9rem] sm:mt-0 sm:w-full  md:mt-[.5rem] " : "absolute bottom-2.5"}`}
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
