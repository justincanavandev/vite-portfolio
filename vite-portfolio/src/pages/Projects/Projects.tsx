import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import type { Project } from "../../types/project-types/projectTypes"
import { ProjectsContext } from "../../context/ProjectsContext"
import "../../projects.css"
import { Link } from "react-router-dom"

export default function Projects() {
  const { componentHeight } = useContext(GlobalContext)

  const {
    showProjectDetails,
    // setShowProjectDetails,
    hasPageRendered,
    setHasPageRendered,
    featuredProject,
    // setFeaturedProject,
    // showAnimation,
    // setShowAnimation,
    closeAnimation,
    // setCloseAnimation,
    imgOpacityClass,
    setImgOpacityClass,
    detailsOpacityClass,
    // setDetailsOpacityClass,
    bannerOpacity,
    setBannerOpacity,
    borderRight,
    setBorderRight,
    projects,
    displayCard,
    setAnimationState,
  } = useContext(ProjectsContext)

  useEffect(() => {
    if (hasPageRendered === false) {
      setTimeout(() => {
        setImgOpacityClass("opacity-100")
        setBannerOpacity("opacity-0")
        setBorderRight("border-r-0")
      }, 300)
      setHasPageRendered(true)
    }
  }, [])

  useEffect(() => {
    console.log("featuredProject", featuredProject)
    console.log("showProjectDetails", showProjectDetails)
    console.log("closeAnimation", closeAnimation)
    console.log("imgOpacityClass", imgOpacityClass)
  }, [featuredProject, showProjectDetails, closeAnimation, imgOpacityClass])

  // function setAnimationState() {
  //   if (closeAnimation) {
  //     console.log("hi")
  //     null
  //   } else {
  //     console.log("hello")
  //     setShowAnimation(true)
  //   }
  // }

  // function imgOpacityAnimation() {
  //   if (closeAnimation) {
  //     setImgOpacityClass("opacity-50")
  //     setDetailsOpacityClass("opacity-0")
  //   } else {
  //     setImgOpacityClass("opacity-100")
  //     setDetailsOpacityClass("opacity-100")
  //   }
  // }

  return (
    <>
      <div
        className="flex flex-col justify-evenly ml-8"
        style={{ height: componentHeight }}
      >

    {/* Projects */}

        {projects.map((project: Project, index: number) => (
          <div key={index} className="flex">
            <div
              className="h-36 w-28 z-50 relative rounded-md text-[.8rem]"
              onClick={() => displayCard(index)}
            >
              <img
                src={project.thumbnail}
                alt="project-image"
                className={`h-36 w-28 object-cover
                ${
                  closeAnimation
                    ? `${
                        featuredProject.name === project.name
                          ? `image-border-close ${borderRight}`
                          : ""
                      }`
                    : `${
                        featuredProject.name === project.name
                          ? `image-border-expand ${borderRight}`
                          : ""
                      }`
                }
                 overflow-hidden border-2 border-red-500 rounded-md 
             ${
                  featuredProject.name === project.name
                    ? "rounded-r-none"
                    : ""
                } 
              ${
                showProjectDetails === true &&
                project.name === featuredProject.name
                  ? `${imgOpacityClass}`
                  : "opacity-50"
              }
              
               `}
              />

              <div
                className={`absolute top-0 bg-red-400 text-white rounded-l-md 
                ${
                  showProjectDetails && project.name === featuredProject.name
                    ? bannerOpacity
                    : "opacity-100"
                }
                ${
                  closeAnimation
                    ? `${
                        featuredProject.name === project.name
                          ? "animate-banner-opacity-expand"
                          : ""
                      }`
                    : `${
                        featuredProject.name === project.name
                          ? "animate-banner-opacity-close"
                          : ""
                      }`
                }
                `}
              >
                <p className="px-1">{project.name}</p>
              </div>
            </div>

            {/* projectDetailsOpen */}

            {featuredProject.name === project.name && showProjectDetails && (
              <div
                onAnimationEnd={setAnimationState}
                className={`h-36 w-28 ${
                  closeAnimation
                    ? "animate-project-close"
                    : "animate-project-expand"
                }      ${
                  showProjectDetails === true &&
                  project.name === featuredProject.name
                    ? detailsOpacityClass
                    : "opacity-0"
                } border-2 z-0 border-red-500 rounded-md border-l-0 rounded-l-none flex flex-col justify-between`}
              >
                <p className="text-[.8rem] mx-auto">{project.name}</p>
                <div className="flex justify-between relative mx-[.3rem] mb-1">
                  <Link to={project.githubRepo} target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                  </Link>
                  <Link to={project.liveLink} target="_blank">
                  <FontAwesomeIcon
                    className="absolute right-0 bottom-[.075rem]"
                    icon={faDesktop}
                    size="lg"
                  />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
