import { GlobalContext } from "../context/GlobalContext"
import { useContext, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation, useParams } from "react-router-dom"
import type { FooterProps } from "../types/FooterTypes"

export default function FooterIcons({ headerHeight }: FooterProps) {
  const { footerIcons, screenHeight, iconsHeightAbove650, setIconsHeightAbove650 } = useContext(GlobalContext)
  const location = useLocation()
  const { projectId } = useParams()

  const iconsRef = useRef<HTMLDivElement>(null)
 

  useEffect(()=> {
    if(iconsRef.current) {
      setIconsHeightAbove650(`${iconsRef.current.clientHeight}px`)
    }
    // console.log('iconsHe', typeof iconsHeightAbove650)
    // console.log('headerHeight', headerHeight)

  },[iconsRef.current])


  const whichComponentIsRendered = () => {
    if (location.pathname === "/") {
      // console.log("/")
      return "mb-[0rem] xs:mt-[5.9rem] sm:mt-0 sm:w-full  md:mt-[.5rem] "
    }
    if (location.pathname === "/projects") {
      // console.log("proj")
      return "mb-[.4rem] xs:mt-[5.9rem] sm:mt-0 sm:w-full  md:mt-[.5rem] "
    }
    if (location.pathname === `/projects/${projectId}`) {
      // console.log("projId")
      return "mb-[6px]"
    }
  }

  function iconSelectAnimation(index: number) {
    if (index === 0) {
      return "icon-text-1"
    }

    if (index === 1) {
      return "icon-text-2"
    }
    if (index === 2) {
      return "icon-text-3"
    }
  }

  return (
    <div className="flex justify-center sm:mb-1 sm:items-end sm:mx-auto md:mt-0 z-40">
      <div
        ref={iconsRef}
        className={`flex ${
          screenHeight < 650
            ? whichComponentIsRendered()
            : "absolute bottom-2.5"
            
        }`}
      >
        {footerIcons.map((icon, index) => (
          <div
            key={index}
            className={`mx-3 ${(location.pathname === "/"
              ? `text-transparent ${iconSelectAnimation(index)}`
              : "text-white")} text-[1.5rem] xs:text-[1.8rem] z-10 md:mx-5`}
          >
            <FontAwesomeIcon className="z-10" size="lg" icon={icon} />
          </div>
        ))}
      </div>
    </div>
  )
}
