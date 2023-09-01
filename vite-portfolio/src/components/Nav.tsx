import NavLinks from "./NavLinks"
import { useContext, useEffect } from "react"
import { PortfolioContext } from "../context/PortfolioContext"

function Nav({navBarRef}: { navBarRef: React.RefObject<HTMLDivElement> }) {

  const { navBarHeight } = useContext(PortfolioContext)

  // useEffect(() => {
  //   if (navBarRef.current) {
  //     navBarRef.current.clientHeight
  //   }
  // }, [navBarRef]);

  useEffect(() => {
    console.log("navBarHeight", navBarHeight)
  }, [navBarHeight])

  return (
    <div ref={navBarRef}className="bg-blue-300 w-[100%] h-[24px] sticky top-0 text-[.6rem] nav-bar flex items-center">
      <p className="pl-1">Justin Canavan</p>

      <NavLinks />
    </div>
  )
}
export default Nav
