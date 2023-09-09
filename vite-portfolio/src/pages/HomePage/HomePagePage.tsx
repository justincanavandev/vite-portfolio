import { HomePageContext } from "../../context/HomePageContext"
import HomePage from "./HomePage"
import type { Bubble } from "../../types/homepage-types/homePageTypes"

export default function HomePagePage() {
  const bubbles: Bubble[] = [
    { title: "About Me", leftClass: "left-3" },
    { title: "Projects", leftClass: "left-5" },
    { title: "Contact", leftClass: "left-5" }
  ]

  return (
    <div>
    <HomePageContext.Provider
      value={{
        bubbles
      }}
    >
      <HomePage />
    </HomePageContext.Provider>
    </div>
  )
}
