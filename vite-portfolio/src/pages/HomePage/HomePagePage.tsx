import { HomePageContext } from "../../context/HomePageContext"
import HomePage from "./HomePage"
import type { Bubble } from "../../types/homepage-types/homePageTypes"
import { useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export default function HomePagePage() {
  const { screenWidth } = useContext(GlobalContext)

  const bubbles: Bubble[] = [
    { title: "About Me", leftClass: "left-[1.06rem]", mtClass:"mt-10", leftSm: "sm:left-[1.15rem]", leftMd: "md:left-[1.57rem]", leftLg: "lg:left-[1.9rem]" },
    { title: "Projects", leftClass: "left-[1.57rem]", mtClass:"mt-10", leftSm: "sm:left-[1.7rem]", leftMd: "md:left-[2rem]", leftLg: "lg:left-[2.5rem]" },
    { title: "Contact", leftClass: "left-[1.46rem]", mtClass:"mt-3", leftSm: "sm:left-[1.7rem]", leftMd: "md:left-[2.1rem]", leftLg: "lg:left-[2.6rem]" },
  ]

  const [boxShadowClass, setBoxShadowClass] = useState<string>("")

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

  return (
    <div>
      <HomePageContext.Provider
        value={{
          bubbles,
          boxShadowClass,
          setBoxShadowClass,
          bubbleAnimationClass,
          setBubbleAnimationClass,
          getBubbleAnimationClass,
        }}
      >
        <HomePage />
      </HomePageContext.Provider>
    </div>
  )
}
