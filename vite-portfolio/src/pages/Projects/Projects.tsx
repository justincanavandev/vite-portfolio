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
  const { componentHeight, ColorPicker } = useContext(GlobalContext)

  const {
    showProjectDetails,
    hasPageRendered,
    setHasPageRendered,
    featuredProject,
    closeAnimation,
    imgOpacityClass,
    setImgOpacityClass,
    detailsOpacityClass,
    bannerOpacity,
    setBannerOpacity,
    // borderRight,
    setBorderRight,
    projects,
    displayCard,
    setAnimationState,
    beforeBorderRight,
    setBeforeBorderRight,
    beforeRoundedTR,
    setBeforeRoundedTR,
    beforeRoundedBR,
    setBeforeRoundedBR,
    beforeRounded,
    setBeforeRounded,
    imgBorderExpand,
    setImgBorderExpand,
  } = useContext(ProjectsContext)

  useEffect(() => {
    if (hasPageRendered === false) {
      setTimeout(() => {
        setImgOpacityClass("opacity-100")
        setBannerOpacity("opacity-0")
        // setBorderRight("border-r-0")
        // setBeforeBorderRight("border-r-0")
        // setBeforeRoundedTR("rounded-tr-0")
        // setBeforeRoundedBR("rounded-br-0")
        setBeforeRounded("")
        // setImgBorderExpand("image-border-expand")
      }, 300)
      setHasPageRendered(true)
    }
  }, [])

  useEffect(() => {
    if (closeAnimation) {
      setTimeout(() => {
        setImgBorderExpand("image-border-expand")
      }, 300)
    }
  })

  useEffect(() => {
    console.log("beforeBorderRight", beforeBorderRight)
  }, [beforeBorderRight])

  useEffect(() => {
    console.log("featuredProject", featuredProject)
    console.log("showProjectDetails", showProjectDetails)
    console.log("closeAnimation", closeAnimation)
    console.log("imgOpacityClass", imgOpacityClass)
  }, [featuredProject, showProjectDetails, closeAnimation, imgOpacityClass])

  return (
    <>
      <div
        className="flex bg-black font-kanit text-white flex-col justify-evenly"
        // style={{ height: componentHeight }}
      >
        {/* Projects */}

        {projects.map((project: Project, index: number) => (
          <div key={index} className="flex w-[77%] mx-auto">
            <div
              className={`before:rounded-l-md before:z-50 h-36 w-28 z-40 relative img-border text-[.8rem] before:${beforeRounded}  ${
                closeAnimation
                  ? `${
                      featuredProject.name === project.name
                        ? `image-border-close before:${beforeBorderRight} before:border-l-[3px] before:border-t-[3px] before:border-b-[3px] before:${beforeRoundedTR} before:${beforeRoundedBR}
                        
                        `
                        : "before:border-[3px] before:rounded-tr-[.375rem] before:rounded-br-[.375rem]"
                    }`
                  : `${
                      featuredProject.name === project.name
                        ? `${imgBorderExpand} before:${beforeBorderRight} before:border-l-[3px] before:border-t-[3px] before:border-b-[3px] before:${beforeRoundedTR} before:${beforeRoundedBR}
                        
                        `
                        : "before:border-[3px] before:rounded-tr-[.375rem] before:rounded-br-[.375rem]"
                    }`
              }`}
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
                          ? `image-opacity-close `
                          : ""
                      }`
                    : `${
                        featuredProject.name === project.name
                          ? `image-opacity-expand `
                          : ""
                      }`
                }
                 overflow-hidden rounded-[.375rem] 
             ${featuredProject.name === project.name ? "rounded-r-none" : ""} 
              ${
                showProjectDetails === true &&
                project.name === featuredProject.name
                  ? `${imgOpacityClass}`
                  : "opacity-50"
              }
              
               `}
              />

              <div
                className={`absolute top-[2.8px] left-[2.9px] bg-teal-gradient text-white rounded-l-[4.2px] 
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
                } border-[3px] z-0 border-white rounded-r-[.375rem] border-l-0 rounded-l-none flex flex-col justify-between`}
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
        {/* <ColorPicker /> */}
      </div>
    </>
  )
}
