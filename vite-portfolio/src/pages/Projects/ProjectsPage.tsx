import Projects from "./Projects"
import { useState } from "react"
import type { Project } from "../../types/project-types/projectTypes"
import { ProjectsContext } from "../../context/ProjectsContext"
import dog from "../../assets/dog.jpg"
import walrus from "../../assets/walrus.jpg"
import shoes from "../../assets/shoes.png"

export default function PortfolioPage() {
  const projects = [
    {
      name: "Gamer's Circuit",
      githubRepo:
        "https://github.com/justincanavanmusic/electronics-e-commerce",
      liveLink: "https://shielded-basin-55972.herokuapp.com/",
      thumbnail: dog,
    },
    {
      name: "CodeCove",
      githubRepo: "https://github.com/justincanavanmusic/tech-blog",
      liveLink: "https://floating-fortress-15177.herokuapp.com/",
      thumbnail: walrus,
    },
    {
      name: "Chicago Hotspot",
      githubRepo: "https://github.com/allisonnault/Chicago-Attractions",
      liveLink: "https://ancient-wildwood-93900.herokuapp.com/",
      thumbnail: shoes,
    },
  ]

  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(true)
  const [hasPageRendered, setHasPageRendered] = useState<boolean>(false)
  const [featuredProject, setFeaturedProject] = useState<Project>(projects[0])
  const [showAnimation, setShowAnimation] = useState<boolean>(false)
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false)
  const [imgOpacityClass, setImgOpacityClass] = useState<string>("opacity-50")
  const [detailsOpacityClass, setDetailsOpacityClass] =
    useState<string>("opacity-100")
  const [bannerOpacity, setBannerOpacity] = useState<string>("opacity-100")
  const [borderRight, setBorderRight] = useState<string>("border-r-2")

  function setAnimationState() {
    if (closeAnimation) {
      console.log("hi")
      null
    } else {
      console.log("hello")
      setShowAnimation(true)
    }
  }

  function displayCard(index: number) {
    if (showProjectDetails && featuredProject.name !== projects[index].name) {
      console.log("one")
      setFeaturedProject(projects[index])
    }

    if (showProjectDetails && featuredProject.name === projects[index].name) {
      console.log("two")

      setCloseAnimation(true)

      if (showAnimation === false) {
        setShowAnimation(true)
      }

      setShowAnimation((prevState) => {
        return !prevState
      })

      setTimeout(() => {
        setImgOpacityClass("opacity-50")
        setDetailsOpacityClass("opacity-0")
        setBannerOpacity("opacity-0")
        setShowProjectDetails(!showProjectDetails)
        setFeaturedProject({} as Project)
      }, 300)
    }

    if (showProjectDetails === false && !featuredProject.name) {
      console.log("three")
      setFeaturedProject(projects[index])
      setCloseAnimation(false)
      setShowAnimation(false)

      setShowAnimation((prevState) => {
        return !prevState
      })

      setShowProjectDetails(true)

      setTimeout(() => {
        setImgOpacityClass("opacity-100")
        setDetailsOpacityClass("opacity-100")
        setBorderRight("border-r-0")
      }, 300)
    }
  }

  return (
    <ProjectsContext.Provider
      value={{
        showProjectDetails,
        setShowProjectDetails,
        hasPageRendered,
        setHasPageRendered,
        featuredProject,
        setFeaturedProject,
        showAnimation,
        setShowAnimation,
        closeAnimation,
        setCloseAnimation,
        imgOpacityClass,
        setImgOpacityClass,
        detailsOpacityClass,
        setDetailsOpacityClass,
        bannerOpacity,
        setBannerOpacity,
        borderRight,
        setBorderRight,
        projects,
        displayCard,
        setAnimationState

      }}
    >
      <Projects />
    </ProjectsContext.Provider>
  )
}
