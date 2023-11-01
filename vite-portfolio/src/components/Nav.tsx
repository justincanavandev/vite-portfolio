import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { NavLink } from "react-router-dom"
import NavLinks from "./NavLinks"
import { Spin as Hamburger } from "hamburger-react"

function Nav({ navBarRef }: { navBarRef: React.RefObject<HTMLDivElement> }) {
  const { isModalOpen, setIsModalOpen, openOrClose, setOpenOrClose } =
    useContext(GlobalContext)
  // const [openOrClose, setOpenOrClose] = useState<boolean>(false)

  const animationToggle = () => {
    if (isModalOpen) {
      setOpenOrClose(false)
    } else {
      setOpenOrClose(true)

      setIsModalOpen(true)
    }
  }

  useEffect(() => {
    console.log("openOrClose", openOrClose)
    console.log("isModalOpen", isModalOpen)
  }, [isModalOpen, openOrClose])

  const setAnimDelay = () => {
    if (!openOrClose) {
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <>
      <div
        ref={navBarRef}
        className={`
        ${
          openOrClose
            ? "animate-open-filter-brightness"
            : "animate-close-filter-brightness"
        }  
        ${
          isModalOpen
            ? "filter brightness-[40%]"
            : "filter brightness-[100%] animate-close-filter-brightness"
        } bg-black font-oswald text-white z-50 w-[100%] h-[48px]  sticky top-0 text-[.75rem] border-b nav-bar flex items-center xs:text-[.85rem]`}
      >
        <div>
          <NavLink className={`ml-1.5 text-[1.3rem] `} to="/">
            Justin Canavan
          </NavLink>
        </div>
        <>
          <div className="flex items-end justify-evenly ml-auto mr-2 ">
            <div className="md:hidden z-50">
              <Hamburger
                toggled={isModalOpen}
                rounded
                // toggle={setIsModalOpen}
                toggle={animationToggle}
                size={29}
              />
            </div>

            <div className="gap-2 font-oswald hidden md:flex text-[1.3rem] ">
              <NavLinks />
            </div>
          </div>
        </>
      </div>

      {/* nav hamburger modal */}

      {isModalOpen && (
        <div
          onAnimationEnd={setAnimDelay}
          className={`fixed inset-0 z-40 w-full h-[200px] gap-2 text-[1.3rem] ${
            openOrClose ? "animate-open-nav-modal" : "animate-close-nav-modal"
          }`}
        >
          <div className="h-[200px] text-white mt-20 border rounded-md mx-auto bg-opacity-95 bg-slate-600 w-[260px] flex flex-col justify-evenly text-[1.6rem] items-center">
            <NavLinks />
          </div>
        </div>
      )}
    </>
  )
}
export default Nav
