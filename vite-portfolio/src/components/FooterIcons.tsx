import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function FooterIcons() {
  const { footerIcons } = useContext(GlobalContext)
  // const location = useLocation()
  // const { projectId } = useParams()

  // const iconsRef = useRef<HTMLDivElement>(null)

  // useEffect(()=> {
  //   if(iconsRef.current) {
  //     setIconsHeightAbove650(`${iconsRef.current.clientHeight}px`)
  //   }

  // },[iconsRef.current])

  // const whichComponentIsRendered = () => {
  //   if (location.pathname === "/") {
  //     // console.log("/")
  //     return "mb-[0rem] xs:mt-[5.9rem] sm:mt-0 sm:w-full  md:mt-[.5rem] "
  //   }
  //   if (location.pathname === "/projects") {
  //     // console.log("proj")
  //     return "mb-[.4rem] xs:mt-[5.9rem] sm:mt-0 sm:w-full  md:mt-[.5rem] "
  //   }
  //   if (location.pathname === `/projects/${projectId}`) {
  //     // console.log("projId")
  //     return "mb-[6px]"
  //   }
  // }

  // function iconSelectAnimation(index: number) {
  //   if (index === 0) {
  //     return "icon-text-1"
  //   }

  //   if (index === 1) {
  //     return "icon-text-2"
  //   }
  //   if (index === 2) {
  //     return "icon-text-3"
  //   }
  // }

  return (
    <div className="flex max-w-[1700px] justify-center items-center z-40">
      <div
        // ref={iconsRef}
        className={`flex 

            
        `}
      >
        {footerIcons.map((icon, index) => (
          <div
            key={index}
            className={`mx-3 text-white text-[1.5rem] xs:text-[1.8rem] z-10 md:mx-5`}
          >
            <Link to={icon.url} target="_blank">
              <FontAwesomeIcon className="z-10" size="lg" icon={icon.icon} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
