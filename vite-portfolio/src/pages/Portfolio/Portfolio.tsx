import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import type { Project } from "../../types/project-types/projectTypes"
import { ProjectsContext } from "../../context/ProjectsContext"

export default function Portfolio() {
  const { componentHeight } = useContext(GlobalContext)

  const {
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
    projects,
  } = useContext(ProjectsContext)

  console.log('projects', projects)

  useEffect(() => {
    console.log("featuredProject", featuredProject)
    console.log("showProjectDetails", showProjectDetails)
    console.log("closeAnimation", closeAnimation)
    console.log("imgOpacityClass", imgOpacityClass)
  }, [featuredProject, showProjectDetails, closeAnimation, imgOpacityClass])

  function setAnimationState() {
    if (closeAnimation) {
      console.log("hi")
      null
    } else {
      console.log("hello")
      setShowAnimation(true)
    }
  }

  useEffect(() => {
    if (hasPageRendered === false) {
      setTimeout(() => {
        setImgOpacityClass("opacity-100")
        setBannerOpacity("opacity-0")
      }, 300)
      setHasPageRendered(true)
    }
  }, [])

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
      }, 300)
    }
  }

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
        {projects.map((project: Project, index: number) => (
          <div key={index} className="flex">
            <div
              className="h-36 w-28 z-50 relative rounded-md box-border text-[.8rem]"
              onClick={() => displayCard(index)}
            >
              <img
                src={project.thumbnail}
                alt="project-image"
                // onAnimationEnd={imgOpacityAnimation}
                className={`h-36 w-28 
                ${
                  closeAnimation
                    ? `${
                        featuredProject.name === project.name
                          ? "animate-img-opacity-close"
                          : ""
                      }`
                    : `${
                        featuredProject.name === project.name
                          ? "animate-img-opacity-expand"
                          : ""
                      }`
                }
                object-cover overflow-hidden border-2 border-red-500 rounded-md box-border ${
                  featuredProject.name === project.name
                    ? "border-r-0 rounded-r-none"
                    : ""
                } 
              ${
                showProjectDetails === true &&
                project.name === featuredProject.name
                  ? imgOpacityClass
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
