import Portfolio from "./Portfolio"
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
            projects
        }}
        >
        <Portfolio/>
        </ProjectsContext.Provider>
    )
}