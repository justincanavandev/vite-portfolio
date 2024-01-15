import { Link } from "react-router-dom"
import { useContext, useState, useEffect, useRef } from "react"
import "../../homepage.css"
import "../../animation.css"
import "../../index.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { GlobalContext } from "../../context/GlobalContext"
import { HomePageContext } from "../../context/HomePageContext"
import FooterIcons from "../../components/FooterIcons"

function HomePage() {
  const { screenWidth, screenHeight } = useContext(GlobalContext)

  const { bubbles, setBubbleAnimationClass } = useContext(HomePageContext)
  const dynamicTextRef: React.RefObject<HTMLDivElement> = useRef(null)
  const [_, setDynamicTextHeight] = useState<string>("")

  const [screenHeightLow, setScreenHeightLow] = useState<number>(0)
  const [screenHeightMid, setScreenHeightMid] = useState<number>(0)

  useEffect(() => {
    const setDivHeight = () => {
      if (dynamicTextRef.current instanceof HTMLElement) {
        setDynamicTextHeight(`${dynamicTextRef.current.clientHeight}px`)
      }
    }
    setDivHeight()
  }, [])

  function selectBubbleAnimation(index: number) {
    if (index === 0) {
      return "bubble-div"
    }

    if (index === 1) {
      return "bubble-div-2"
    }
    if (index === 2) {
      return "bubble-div-3"
    }
  }

  function bubbleAnimation(index: number) {
    if (index === 0) {
      return "bubble"
    }

    if (index === 1) {
      return "bubble-2"
    }
    if (index === 2) {
      return "bubble-3"
    }
  }

  function bubbleTextAnimation(index: number) {
    if (index === 0) {
      return "bubble-text"
    }

    if (index === 1) {
      return "bubble-text-2"
    }
    if (index === 2) {
      return "bubble-text-3"
    }
  }

  function myNameIsScreenHeight() {
    //reg
    if (screenHeight <= screenHeightLow && screenWidth < 475) {
      return "h-24"
    }

    if (
      screenHeight >= screenHeightLow &&
      screenHeight < screenHeightMid &&
      screenWidth < 475
    ) {
      return "h-[18vh]"
    }

    if (screenHeight >= screenHeightMid && screenWidth < 475) {
      return "h-[16vh]"
    }

    //xs

    if (screenHeight < screenHeightLow && screenWidth >= 475) {
      return "xs:h-32 sm:h-40 md:h-32 lg:h-40"
    }

    if (
      screenHeight < screenHeightMid &&
      screenHeight >= screenHeightLow &&
      screenWidth >= 475
    ) {
      return "xs:h-[22vh] sm:h-[28vh] md:h-[24vh] lg:h-[30vh]"
    }

    if (screenHeight >= screenHeightMid && screenWidth >= 475) {
      return "xs:h-[22vh] sm:h-[24vh] md:h-[25vh] lg:h-[29vh]"
    }
  }

  function frontEndScreenHeight() {
    // reg
    if (screenHeight <= screenHeightLow && screenWidth < 475) {
      return "h-[7rem]"
    }

    if (screenHeight >= screenHeightLow && screenWidth < 475) {
      return "h-[7.5rem]"
    }

    if (screenHeight >= screenHeightMid && screenWidth < 475) {
      return "h-[19vh]"
    }

    // xs

    if (screenHeight < screenHeightLow && screenWidth >= 475) {
      return "h-[7.4rem] sm:h-[8.5rem] md:h-[7.7rem] lg:h-[8.5rem]"
    }

    if (
      screenHeight >= screenHeightLow &&
      screenHeight < screenHeightMid &&
      screenWidth >= 475
    ) {
      return "h-[20vh] sm:h-[18vh] md:h-[21vh]"
    }

    if (screenHeight >= screenHeightMid && screenWidth >= 475) {
      return "xs:h-[20vh] md:h-[22vh] lg:h-[20vh]"
    }
  }

  function bubbleScreenHeight() {
    //reg

    if (screenHeight <= screenHeightLow && screenWidth < 475) {
      return "h-[14rem] flex flex-wrap justify-evenly overflow-y-scroll"
    }

    if (
      screenHeight >= screenHeightLow &&
      screenHeight < screenHeightMid &&
      screenWidth < 475
    ) {
      return "justify-around h-[46vh] flex flex-row flex-wrap"
    }
    if (screenHeight >= screenHeightMid && screenWidth < 475) {
      return "flex-col h-[52vh] justify-between"
    }

    //xs

    if (screenHeight < screenHeightLow && screenWidth >= 475) {
      return "flex-wrap justify-evenly "
    }

    if (screenHeight >= screenHeightLow && screenWidth >= 475) {
      return "xs:h-[44vh] sm:h-[40vh] md:h-[36vh]"
    }
  }

  const [iconHeight, setIconHeight] = useState<number>(0)

  useEffect(() => {
    if (screenWidth < 475) {
      setIconHeight(520)
      setScreenHeightLow(520)
      setScreenHeightMid(650)
    }
    if (screenWidth >= 475 && screenWidth < 640) {
      setIconHeight(550)
      setScreenHeightLow(550)
      setScreenHeightMid(650)
    }
    if (screenWidth < 768 && screenWidth >= 640) {
      setIconHeight(550)
      setScreenHeightLow(550)
      setScreenHeightMid(600)
    }

    if (screenWidth < 1024 && screenWidth >= 768) {
      setIconHeight(550)
      setScreenHeightLow(550)
      setScreenHeightMid(600)
    }
    if (screenWidth >= 1024) {
      setIconHeight(550)
      setScreenHeightLow(550)
      setScreenHeightMid(600)
    }
  }, [screenWidth])

  function iconView() {
    if (screenHeight >= iconHeight && screenWidth >= 320) {
      return "absolute bottom-2.5 left-0 right-0"
    }
    if (screenHeight < iconHeight && screenWidth >= 320) {
      return "h-[52px] items-end sm:h-[90px] md:h-[52px] lg:h-[70px] lg:mb-2"
    }
    if (screenHeight >= iconHeight && screenWidth < 320) {
      return "h-[8vh] flex items-end mb-[10px]"
    }
    if (screenHeight < iconHeight && screenWidth < 320) {
      return "h-[60px] items-end w-full"
    }
  }

  useEffect(() => {
    if (screenWidth < 475) {
      setBubbleAnimationClass("bubble-div")
    }
    if (screenWidth >= 475 && screenWidth < 640) {
      setBubbleAnimationClass("bubble-div-xs")
    }
    if (screenWidth >= 640 && screenWidth < 768) {
      setBubbleAnimationClass("bubble-div-sm")
    }
    if (screenWidth >= 768 && screenWidth < 1024) {
      setBubbleAnimationClass("bubble-div-md")
    }
    if (screenWidth >= 1024 && screenWidth < 1280) {
      setBubbleAnimationClass("bubble-div-lg")
    }
    if (screenWidth >= 1280 && screenWidth < 1536) {
      setBubbleAnimationClass("bubble-div-xl")
    }
    if (screenWidth >= 1536) {
      setBubbleAnimationClass("bubble-div-2xl")
    }
  }, [screenWidth])

  return (
    <>
      <div
        className={`whitespace-nowrap min-h-screen text-zinc-200 relative overflow-x-auto bg-black
        flex flex-col py-3 font-oswald font-light text-[1.2rem] xs:text-[1.8rem] sm:text-[2.1rem] md:text-[2.1rem] md:py-0 lg:text-[2.2rem] 
    
        `}
      >
        {/* lg:w-[70%] md:w-[58%] md:pt-3 md:flex md:flex-col for when i want to add an image to the right */}
        <div className="">
          <div className={`flex flex-col  ${myNameIsScreenHeight()} `}>
            <div className="flex flex-col pl-2 justify-center">
              <h2 className="font-thin text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem]">
                <span className="hi">Hi!&nbsp;</span>
                <span className="my-name-is pl-[.02rem]">My name is</span>
              </h2>
              {/* font was font-shadows */}
              <span className="justin-canavan font-shadows capitalize font-bold text-white text-[2.6rem] xs:text-[4rem] sm:text-[4rem] md:text-[3.5rem] lg:text-[4.2rem]">
                Justin Canavan
              </span>
            </div>
          </div>

          {/* i am a front-end */}

          <div
            className={`flex flex-col ${frontEndScreenHeight()}  px-3 text-[1.4rem] text-zinc-200`}
          >
            <span className="">
              <span className="font-thin pb-[.5rem] inline i-am-a relative text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem]">
                I am a
              </span>
            </span>

            <div className="dynamic-text flex ml-[4vw]" ref={dynamicTextRef}>
              <span className="front-end-dev items-center rounded-md">
                <span className="dynamic-text text-white font-oswald uppercase font-bold word-1 text-[1.5rem] xs:text-[1.8rem] sm:text-[1.9rem] md:text-[2rem] lg:text-[2.3rem]">
                  front-end developer
                </span>
              </span>
            </div>
          </div>

          {/* planets */}

          <div
            className={`flex min-w-[320px] ${bubbleScreenHeight()} xs:flex-row xs:flex-wrap xs:justify-evenly items-center text-[1rem] font-orbitron lowercase xs:text-[1.17rem] sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.5rem]`}
          >
            {bubbles?.map((bubble, index) => (
              <Link
                key={index}
                className={` ${
                  screenWidth >= 475
                    ? ` ${
                        screenHeight < 600
                          ? "xs:w-[35%] sm:w-[30%] lg:w-[20%]"
                          : "xs:w-[50%]"
                      } md:w-[50%] lg:w-[30%]`
                    : ""
                } xs:flex xs:justify-center`}
                to={`/${bubble.title.toLowerCase().replace(" ", "-")}`}
              >
                <div
                  className={`${selectBubbleAnimation(
                    index
                  )} mx-[1.44rem] xs:mx-[1.7rem] `}
                >
                  <div
                    className={` ${bubbleAnimation(
                      index
                    )} w-28 h-24 xs:w-32 xs:h-28 sm:w-36 sm:h-32  md:w-32 md:h-28 lg:w-40 lg:h-36 relative text-white`}
                  ></div>
                  <p
                    className={`absolute top-[2.12rem] xs:top-[2.57rem] sm:top-[2.75rem] md:top-[2.4rem] lg:top-[3.3rem] ${bubbleTextAnimation(
                      index
                    )} text-transparent
                ${bubble.leftClass} ${bubble.leftSm} ${bubble.leftMd} ${
                      bubble.leftLg
                    }
                  `}
                  >
                    {bubble.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* icons */}
        <div
          className={`${
            screenHeight >= iconHeight && screenWidth < 320
              ? "flex flex-col absolute bottom-0 w-full justify-end min-w-[320px]"
              : ""
          }`}
        >
          <div
            className={`flex mt-3 justify-center
        ${iconView()}
        `}
          >
            <FooterIcons />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
