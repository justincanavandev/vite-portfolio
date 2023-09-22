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
  const { componentHeight, screenWidth, ColorPicker } =
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
      <div className="flex flex-col justify-between py-3 font-kanit text-[1.2rem] xs:text-[1.8rem] sm:text-[2.1rem] md:text-[2.1rem] lg:text-[2.2rem] text-white bg-black min-h-screen">
     
        <div className="flex flex-col">
          <div className="flex flex-col pl-2 justify-center">
            <h2 className="">
              <span className="hi">Hi!&nbsp;</span>
              <span className="my-name-is pl-[.02rem]">My name is</span>
            </h2>
            <span className="justin-canavan font-shadows text-[2.6rem]">Justin Canavan</span>
          </div>

          
        </div>
        <div className="flex overflow-x-hidden overflow-y-hidden px-2 py-6 justify-center text-[1.4rem]">
            <ul className="dynamic-text">
              <li className="mx-2 flex" ref={dynamicTextRef}>
                <span className="text-white i-am-a relative">I am a&nbsp;</span>
                {/* <div className=""> */}
                <span className="front-end-dev rounded-md">
                  <span className="dynamic-text word-1">
                    Front-End Developer
                  </span>
                </span>
                {/* </div> */}
              </li>
              {/* <li className="flex">
                <span className="text-white dynamic-text word-2 mx-auto">
                  I create <span className="multicolor-text">experiences!</span>
                </span>
              </li> */}
            </ul>
          </div>

        {/* select a planet */}

        {/* <div className="relative flex justify-center">
          <span
            className="font-montserrat rounded-md select-bubble px-2 font-bold mx-auto text-transparent uppercase"
            // style={{ boxShadow: boxShadowClass }}
          >
            <span className="pick-a-bubble">Select a planet</span>
          </span>
        </div> */}

        {/* bubbles */}

        <div className="flex justify-evenly text-[1.1rem] sm:text-[1.6rem] lg:text-[1.75rem] flex-wrap">
          {bubbles?.map((bubble, index) => (
            <Link
              key={index}
              className=""
              to={`/${bubble.title.toLowerCase().replace(" ", "-")}`}
            >
              <div className={`${selectBubbleAnimation(index)} mx-[1.4rem]`}>
                <div
                  className={` ${
                    screenWidth >= 475 ? "" : ""
                  }  ${bubbleAnimation(
                    index
                  )} w-24 h-20 sm:w-36 sm:h-32 lg:w-44 lg:h-40 text-center relative text-white`}
                ></div>
                <p
                  className={`absolute top-[1.55rem] sm:top-[2.6rem] lg:top-[3.5rem] ${bubbleTextAnimation(
                    index
                  )} text-transparent
                ${bubble.leftClass} ${bubble.leftSm} ${bubble.leftLg}
                  `}
                >
                  {bubble.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* icons */}

        <div className="flex sticky-bottom justify-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`mx-3 text-transparent z-10 md:mx-5 ${iconSelectAnimation(
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
