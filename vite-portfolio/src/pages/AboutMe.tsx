import "../animation.css"
import { useContext, useRef, useEffect, RefObject, useState } from "react"
import headshot from "../assets/jc-headshot.png"
import { PortfolioContext } from "../context/PortfolioContext"

export default function AboutMe() {
  const { componentHeight } = useContext(PortfolioContext)
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
  



  return (
    <>
      <div className="bg-medBlue w-full" style={{ height: componentHeight }}>
        <div className="flex justify-center ">
          <h2 className="text-center text-white">
            <span className="hi">Hi!&nbsp;</span>
            <span className="im-justin-canavan pl-[.02rem]">
              I'm Justin Canavan.
            </span>
          </h2>
        </div>
        <div className="">
          <img
            src={headshot}
            alt="Justin Canavan headshot"
            className="photo-anim photo-margin headshot h-40 object-contain"
          ></img>
        </div>
        <div className="">
          <div className="wrapper">
            <div className="d-block">
              <div className="text-center i-am-margin">
                <span className="static-text">I am a</span>
              </div>

              <ul className="text-center dynamic-text">
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
      </div>
    </>
  )
}
