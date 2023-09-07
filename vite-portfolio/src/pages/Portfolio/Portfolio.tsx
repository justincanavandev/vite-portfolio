import dog from "../../assets/dog.jpg"
import walrus from "../../assets/walrus.jpg"
import shoes from "../../assets/shoes.png"
import { useContext, useState, useEffect } from "react"
import { PortfolioContext } from "../../context/PortfolioContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"

export default function Portfolio() {
  const { componentHeight, screenWidth } = useContext(PortfolioContext)

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

  type Project = {
    name: string
    githubRepo: string
    liveLink: string
    thumbnail: string
  }

  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(true)

  const [featuredProject, setFeaturedProject] = useState<Project>(projects[0])
  const [showAnimation, setShowAnimation] = useState<boolean>(false)
  // const [animationOpen, setAnimationOpen] = useState<boolean>(true)
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false)

  useEffect(() => {
    console.log("featuredProject", featuredProject)
    console.log("showProjectDetails", showProjectDetails)
  }, [featuredProject, showProjectDetails])

  function setAnimationState() {
    if (closeAnimation) {
      null
    } else {
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

      if(showAnimation===false) {
        setShowAnimation(true)
      }

      setShowAnimation((prevState) => {
        return !prevState
      })
      
      setTimeout(() => {
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
    }
  }

  // console.log("animationOpen", animationOpen)
  console.log("closeAnimation", closeAnimation)

  return (
    <>
      <div
        className="flex flex-col justify-evenly ml-8"
        style={{ height: componentHeight }}
      >
        {projects.map((project: Project, index: number) => (
          <div className="flex">
            <div
              key={index}
              className="h-36 w-28 z-10 rounded-md box-border"
              onClick={() => displayCard(index)}
            >
              <img
                src={project.thumbnail}
                alt="project-image"
                className={`h-36 w-28 object-cover overflow-hidden border-2 border-red-500 rounded-md box-border ${
                  featuredProject.name === project.name
                    ? "border-r-0 rounded-r-none"
                    : ""
                } ${
                  showProjectDetails === true &&
                  project.name === featuredProject.name
                    ? "opacity-100"
                    : "opacity-50"
                }
              
               `}
              />
            </div>
            {featuredProject.name === project.name && showProjectDetails && (
              <div
                onAnimationEnd={setAnimationState}
                className={`h-36 w-28 ${
                  closeAnimation
                    ? "animate-project-close"
                    : "animate-project-expand"
                } border-2 z-0 border-red-500 rounded-md border-l-0 rounded-l-none flex flex-col justify-between`}
              >
                <p className="text-[.8rem] mx-auto">{project.name}</p>
                <div className="flex justify-between relative mx-[.3rem] mb-1">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                  <FontAwesomeIcon
                    className="absolute right-0 bottom-[.075rem]"
                    icon={faDesktop}
                    size="lg"
                  />
                </div>
              </div>
             )} 
          </div>
        ))}
      </div>
    </>
  )
}
