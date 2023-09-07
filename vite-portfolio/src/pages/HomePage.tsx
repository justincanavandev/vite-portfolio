import { NavLink } from "react-router-dom"
import { useContext, useState, useEffect, useRef, RefObject } from "react"
import "../homepage.css"
import "../animation.css"
import "../index.css"
import { PortfolioContext } from "../context/PortfolioContext"
import headshot from "../assets/jc-headshot.png"

function HomePage() {
  const { componentHeight, screenWidth } = useContext(PortfolioContext)
  const dynamicTextRef: RefObject<HTMLLIElement> = useRef(null)
const [dynamicTextHeight, setDynamicTextHeight] = useState<string>("")

useEffect(() => {
  const setDivHeight = () => {
    if(dynamicTextRef.current instanceof HTMLElement) {
      setDynamicTextHeight(`${dynamicTextRef.current.clientHeight}px`)}
    }
    setDivHeight()
  }, [])

useEffect(() => {
  console.log('dynamicTextHeight', dynamicTextHeight)
}, [dynamicTextHeight])


  const [bubbleAnimationClass, setBubbleAnimationClass] = useState<string>(
    () => {
      return getBubbleAnimationClass(screenWidth)
    }
  )

  function getBubbleAnimationClass(screenWidth: number) {
    if (screenWidth < 475) {
      return "bubble-div"
    }
    if (screenWidth >= 475 && screenWidth < 640) {
      return "bubble-div-xs"
    }
    if (screenWidth >= 640 && screenWidth < 768) {
      return "bubble-div-sm"
    }
    if (screenWidth >= 768 && screenWidth < 1024) {
      return "bubble-div-md"
    }
    if (screenWidth >= 1024 && screenWidth < 1280) {
      return "bubble-div-lg"
    }
    if (screenWidth >= 1280 && screenWidth < 1536) {
      return "bubble-div-xl"
    }
    if (screenWidth >= 1536) {
      return "bubble-div-2xl"
    }

    return ""
  }

  useEffect(() => {
    if (screenWidth < 475) {
      setBubbleAnimationClass("bubble-div");
    }
    if (screenWidth >= 475 && screenWidth < 640) {
      setBubbleAnimationClass("bubble-div-xs");
    }
    if (screenWidth >= 640 && screenWidth < 768) {
      setBubbleAnimationClass("bubble-div-sm");
    }
    if (screenWidth >= 768 && screenWidth < 1024) {
      setBubbleAnimationClass("bubble-div-md");
    }
    if (screenWidth >= 1024 && screenWidth < 1280) {
      setBubbleAnimationClass("bubble-div-lg");
    }
    if (screenWidth >= 1280 && screenWidth < 1536) {
      setBubbleAnimationClass("bubble-div-xl");
    }
    if (screenWidth >= 1536) {
      setBubbleAnimationClass("bubble-div-2xl");
    }
  }, [screenWidth]);

  console.log("screenWidth", screenWidth)
  console.log("bubbleAnimationClass", bubbleAnimationClass)

  return (

      <>
      <div className="w-full font-kanit flex flex-col justify-around text-[1.3rem] py-8 sm:flex-wrap" style={{ height: componentHeight }}>
        <div className="flex justify-center">
          <h2 className="text-center text-[1.5rem] block text-black">
            <span className="hi ">Hi!&nbsp;</span>
            <span className="im-justin-canavan pl-[.02rem]">
              I'm Justin Canavan.
            </span>
          </h2>
        </div>
        {/* <div className="">
          <img
            src={headshot}
            alt="Justin Canavan headshot"
            className="photo-anim h-48 rounded-full overflow-hidden photo-margin headshot object-cover mx-auto"
          ></img>
        </div> */}
       
        <div className="">
          <div className="wrapper">
            <div className="d-block">
              <div className="text-center i-am-margin">
                <span className="static-text text-black">I am a</span>
              </div>

              <ul className="text-center overflow-hidden h-7 text-red-400 dynamic-text">
                <li className="word1" ref={dynamicTextRef}>
                  <span className="dynamic-text word-1">
                    JavaScript Developer
                  </span>
                </li>
                <li className="word2">
                  <span className="dynamic-text word-2">React Developer</span>
                </li>
                <li className="word3">
                  <span className="dynamic-text word-3">Musician</span>
                </li>
                <li className="word4">
                  <span className="dynamic-text word-4">Software Engineer</span>
                </li>
              </ul>
              
            </div>
         
          </div>
          
        </div>
        <div className="relative">
        <p className="mx-auto pick-a-bubble">Pick a bubble to learn more!</p>
        </div>
        
      
  <div className="flex justify-evenly flex-wrap">
      <NavLink className="" to="/about-me">
        <div className={bubbleAnimationClass}>
          <div className="bubble w-28 h-24 mt-5 text-center relative text-white"></div>
          <p className="absolute top-7 left-3  text-white">About Me</p>
        </div>
        
      </NavLink>
      <NavLink className="" to="/portfolio">
        <div className={bubbleAnimationClass}>
          <div className="bubble w-28 h-24 mt-5 text-center relative text-white"></div>
          <p className="text-white absolute top-7 left-5">Projects</p>
        </div>
        
      </NavLink>
      <NavLink className="" to="/contact">
        <div className={bubbleAnimationClass}>
          <div className="bubble w-28 h-24 mt-5 text-center relative text-white"></div>
          <p className="text-white absolute top-7 left-5">Contact</p>
        </div>
        
      </NavLink>
      </div>
    </div>
    </>
  )
}

export default HomePage
