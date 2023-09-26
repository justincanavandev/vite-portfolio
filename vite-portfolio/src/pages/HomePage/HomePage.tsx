import { Link } from "react-router-dom"
import { useContext, useState, useEffect, useRef, RefObject } from "react"
import "../../homepage.css"
import "../../animation.css"
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { GlobalContext } from "../../context/GlobalContext"
import { HomePageContext } from "../../context/HomePageContext"

function HomePage() {
  const { componentHeight, screenWidth, screenHeight, ColorPicker } =
    useContext(GlobalContext)

  const icons = [faLinkedin, faGithub, faEnvelope]

  const {
    bubbles,
    boxShadowClass,
    setBoxShadowClass,
    setBubbleAnimationClass,
  } = useContext(HomePageContext)
  const dynamicTextRef: RefObject<HTMLLIElement> = useRef(null)
  const [dynamicTextHeight, setDynamicTextHeight] = useState<string>("")

  //og is 2500, just add that to whatever number pickABubbleStart is

  useEffect(() => {
    setTimeout(
      () => {
        setBoxShadowClass(
          "0px 10px 20px rgba(100, 255, 255, 0.7), 0px -5px 25px rgba(100, 255, 255, 0.7)"
        )
      },
      // 2500
      15500
    )
  }, [])

  useEffect(() => {
    const setDivHeight = () => {
      if (dynamicTextRef.current instanceof HTMLElement) {
        setDynamicTextHeight(`${dynamicTextRef.current.clientHeight}px`)
      }
    }
    setDivHeight()
  }, [])

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
    if (screenHeight < 520 && screenWidth >= 320 && screenWidth < 475) {
      return "h-24"
    }

    if (
      screenHeight >= 520 &&
      screenHeight < 650 &&
      screenWidth >= 320 &&
      screenWidth < 475
    ) {
      return "h-[18vh]"
    }

    if (screenHeight >= 650 && screenWidth >= 320 && screenWidth < 475) {
      return "h-[16vh]"
    }

    //xs

    if (screenHeight <= 550 && screenWidth >= 475 && screenWidth < 640) {
      return "xs:h-32"
    }

    if (
      screenHeight < 650 &&
      screenHeight > 550 &&
      screenWidth >= 475 &&
      screenWidth < 640
    ) {
      return "xs:h-[22vh]"
    }

    if (screenHeight >= 650 && screenWidth >= 475 && screenWidth < 640) {
      return "xs:h-[20vh]"
    }
  }

  function frontEndScreenHeight() {
    // reg
    if (screenHeight < 520 && screenWidth >= 320 && screenWidth < 475) {
      return "h-[7rem]"
    }

    if (screenHeight >= 520 && screenWidth >= 320 && screenWidth < 475) {
      return "h-[7.5rem]"
    }

    // xs

    if (screenHeight <= 550 && screenWidth >= 475 && screenWidth < 640) {
      return "h-[7.4rem]"
    }

    if (screenHeight >= 550 && screenWidth >= 475 && screenWidth < 640) {
      return "h-[20vh]"
    }

    // if (screenHeight > 550 && screenWidth >= 475 && screenWidth < 640) {
    //   return "h-[20vh]"
    // }

    if (screenHeight >= 650 && screenWidth < 475 && screenWidth < 640) {
      return "h-[19vh]"
    }
    // if (screenHeight >= 650 && screenWidth >= 475 && screenWidth < 640) {
    //   return "xs:h-[22vh]"
    // }
    // if (screenHeight < 650 && screenHeight > 550 && screenWidth >= 475) {
    //   return "xs:h-[26vh]"
    // }
  }

  console.log('screenHeight', screenHeight)
  console.log('screenWidth', screenWidth)

  function bubbleScreenHeight() {
    //reg

    if (screenHeight <= 520) {
      if (screenWidth >= 320 && screenWidth < 475) {
        return "h-[14rem] flex flex-wrap justify-evenly"
      }
    }

    if (
      screenHeight >= 520 &&
      screenHeight < 650 &&
      screenWidth >= 320 &&
      screenWidth < 475
    ) {
      return "justify-around h-[46vh] flex flex-row flex-wrap"
    }
    if (screenHeight >= 650 && screenWidth >= 320 && screenWidth < 475) {
      return "flex-col h-[52vh] justify-between"
    }

    //xs

    if (screenHeight <= 550 && screenWidth >= 475 && screenWidth < 640) {
      return "flex-wrap justify-evenly"
    }

    if (
      screenHeight < 650 &&
      screenHeight >= 550 &&
      screenWidth >= 475 &&
      screenWidth < 640
    ) {
      return "xs:h-[47vh]"
    }
    if (screenHeight >= 650 && screenWidth >= 475 && screenWidth < 640) {
      return "xs:h-[45vh]"
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
        className={`flex flex-col py-3 font-oswald font-light text-[1.2rem] xs:text-[1.8rem] sm:text-[2.1rem] md:text-[2.1rem] text-zinc-200 lg:text-[2.2rem]  bg-black min-h-screen ${
          screenHeight > 550
            ? "min-h-screen"
            : "min-h-[520px] xs:min-h-[550px] overflow-y-scroll"
        }`}
      >
        <div className={`flex flex-col  ${myNameIsScreenHeight()} `}>
          <div className="flex flex-col pl-2 justify-center">
            <h2 className="font-thin lowercase text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]">
              <span className="hi">Hi!&nbsp;</span>
              <span className="my-name-is pl-[.02rem]">My name is</span>
            </h2>
            <span className="justin-canavan font-shadows text-white text-[2.6rem] xs:text-[3.5rem] sm:text-[4rem] md:text-[4.4rem]">
              Justin Canavan
            </span>
          </div>
        </div>

        {/* i am a front-end */}

        {/* <div className={`flex flex-col ${screenHeight>=640 && screenWidth<475 ? "h-[17vh]" : "h-[20vh]"}  ${screenHeight>=700 && screenWidth>=475 ? "xs:h-[20vh]" :"xs:h-[20vh]" } ${screenHeight>550 &&  "h-24"} overflow-x-hidden overflow-y-hidden px-3 text-[1.4rem] text-zinc-200`}> */}
        <div
          className={`flex flex-col ${frontEndScreenHeight()} overflow-x-hidden overflow-y-hidden px-3 text-[1.4rem] text-zinc-200`}
        >
          <span className="">
            <span className="font-thin pb-[.5rem] inline i-am-a relative text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]">
              i am a{/* {screenWidth < 475 ? "" : "\u00A0"} */}
            </span>
          </span>

          <div className="dynamic-text flex ml-[4vw]" ref={dynamicTextRef}>
            <span className="front-end-dev items-center rounded-md">
              <span className="dynamic-text text-white font-majorMono font-bold word-1 text-[1.15rem] xs:text-[1.4rem] sm:text-[1.55rem] md:text-[1.75rem]">
                front-end developer
              </span>
            </span>
          </div>
        </div>

        {/* planets */}

        {/* <div className={`flex ${screenHeight>=640 && screenWidth<475 ? "flex-col h-[52vh] justify-between" : "justify-evenly flex-row flex-wrap" } xs:flex-row  xs:flex-wrap h-[45vh] xs:h-[35vh] items-center text-[1rem] font-orbitron lowercase xs:text-[1.17rem] sm:text-[1.4rem] lg:text-[1.75rem]`}> */}
        <div
          className={`flex ${bubbleScreenHeight()} xs:flex-row xs:flex-wrap xs:justify-evenly items-center text-[1rem] font-orbitron lowercase xs:text-[1.17rem] sm:text-[1.4rem] lg:text-[1.75rem]`}
        >
          {bubbles?.map((bubble, index) => (
            <Link
              key={index}
              className={` ${
                screenWidth >= 475 ? "xs:w-[50%]" : "xs:w-[30%]"
              } xs:flex xs:justify-center`}
              to={`/${bubble.title.toLowerCase().replace(" ", "-")}`}
            >
              <div className={`${selectBubbleAnimation(index)} mx-[1.44rem]`}>
                <div
                  className={` ${bubbleAnimation(
                    index
                  )} w-28 h-24 xs:w-32 xs:h-28 sm:w-36 sm:h-32 md:w-40 md:h-36 lg:w-44 lg:h-40 relative text-white`}
                ></div>
                <p
                  className={`absolute top-[2.12rem] xs:top-[2.57rem] sm:top-[2.75rem] md:top-[3.23rem] lg:top-[3.5rem] ${bubbleTextAnimation(
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

        {/* icons */}

        <div className="flex text-center absolute bottom-2 left-0 right-0 justify-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`mx-3 text-transparent text-[1.5rem] xs:text-[1.8rem] z-10 md:mx-5 ${iconSelectAnimation(
                index
              )}`}
            >
              <FontAwesomeIcon className="z-10" size="lg" icon={icon} />
            </div>
          ))}
        </div>
        {/* <ColorPicker /> */}
      </div>
    </>
  )
}

export default HomePage
