import { NavLink } from "react-router-dom"
import { useContext, useState, useEffect, useRef, RefObject } from "react"
import "../../homepage.css"
import "../../animation.css"
import "../../index.css"
import { GlobalContext } from "../../context/GlobalContext"
import { HomePageContext } from "../../context/HomePageContext"


function HomePage() {
  const { componentHeight, screenWidth, ColorPicker } =
    useContext(GlobalContext)

  const {
    bubbles,
    boxShadowClass,
    setBoxShadowClass,
    bubbleAnimationClass,
    setBubbleAnimationClass,
    getBubbleAnimationClass,
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
        className="w-full font-kanit text-[1.5rem] text-white py-8 bg-black sm:flex-wrap"
        style={{ height: componentHeight }}
      >
        <div className="flex flex-col justify-around h-[15%]">
          <div className="flex justify-center">
            <h2 className="">
              <span className="hi">Hi!&nbsp;</span>
              <span className="im-justin-canavan pl-[.02rem]">
                I'm Justin Canavan.
              </span>
            </h2>
          </div>

          <div className="flex justify-center">
            <ul className="overflow-hidden dynamic-text">
              <li className="mx-2" ref={dynamicTextRef}>
                <span className="text-white i-am-a relative">I am a&nbsp;</span>
                <span className="dynamic-text text-teal word-1">
                  Front-End Developer
                </span>
              </li>
              <li className="flex">
                <span className="text-white dynamic-text word-2 mx-auto">
                  I create <span className="multicolor-text">experiences!</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex justify-center mt-20">
          <span
            className="font-montserrat pick-a-bubble select-bubble rounded-md px-2 font-bold mx-auto text-white uppercase"
            style={{ boxShadow: boxShadowClass }}
          >
            Select a planet
          </span>
        </div>

        <div className="flex justify-evenly text-[1.25rem] flex-wrap">
          {bubbles?.map((bubble, index) => (
            <NavLink
              key={index}
              className=""
              to={`/${bubble.title.toLowerCase().replace(" ", "-")}`}
            >
              <div className={`${bubbleAnimationClass} mx-6`}>
                <div className="bubble w-28 h-24 mt-12 text-center relative text-white"></div>
                <p
                  className={`absolute top-[1.85rem] bubble-text text-black
                ${bubble.leftClass} 
                  `}
                >
                  {bubble.title}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
        <ColorPicker />
      </div>
    </>
  )
}

export default HomePage
