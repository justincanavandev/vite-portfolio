import NavLinks from "./NavLinks"

import { NavLink } from 'react-router-dom'

function Nav({navBarRef}: { navBarRef: React.RefObject<HTMLDivElement> }) {

  return (
    <div ref={navBarRef} className="bg-blue-300 z-50 w-[100%] h-[24px] sticky top-0 text-[.6rem] nav-bar flex items-center">
      <NavLink to="/">Justin Canavan</NavLink>
      <NavLinks />
    </div>
  )
}
export default Nav
