import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faBars } from "@fortawesome/free-solid-svg-icons"
import type { Project } from "../../types/project-types/projectTypes"
import { ProjectsContext } from "../../context/ProjectsContext"
import "../../projects.css"
import { Link } from "react-router-dom"
import ProjectDetails from "./ProjectDetails"


export default function Projects() {
  const { screenWidth, isModalOpen } = useContext(GlobalContext)

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
    projects,
    displayCard,
    setAnimationState,
    beforeBorderRight,
    beforeRoundedTR,
    beforeRoundedBR,
    beforeRounded,
    setBeforeRounded,
    viewProjectDetails,
    setViewProjectDetails,
  } = useContext(ProjectsContext)

  const openProjectModal = (index: number) => {
    console.log("index", index)

    setViewProjectDetails(true)
  }

  const [projectIndex, setProjectIndex] = useState<number>(0)


  useEffect(() => {
    if (hasPageRendered === false) {
      setTimeout(() => {
        setImgOpacityClass("opacity-100")
        setBannerOpacity("opacity-0")
        setBeforeRounded("")
      }, 300)
      setHasPageRendered(true)
    }
  }, [])

  return (
    <>
      <div
        className={`flex flex-col overflow-x-scroll bg-black min-h-screen pb-6 ${
          (isModalOpen || viewProjectDetails) && "filter brightness-[40%]"
        }`}
      >
        {/* <h1 className="text-[2.5rem] pt-2 pl-2 text-white font-oswald uppercase">
          Projects
        </h1> */}
        <div className="flex font-oswald pt-6 text-white flex-col sm:flex-row sm:flex-wrap sm:justify-start sm:pl-4">

          {/* Projects */}

          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className={`flex ${
                screenWidth >= 320 ? "w-[85%]" : "w-[320px] pr-3"
              }  h-[30%] mx-auto pt-4 pl-3 z-30 xs:w-[%] sm:w-[48%] sm:ml-0 sm:mr-0`}
            >
              <div
                className={`before:rounded-l-md before:z-50 h-40 w-32 z-40 relative img-border text-[.8rem] xs:h-44 xs:w-36 md:h-52 md:w-40 lg:h-64 lg:w-48  before:${beforeRounded}  ${
                  closeAnimation
                    ? `${
                        featuredProject.name === project.name
                          ? `image-border-close before:${beforeBorderRight} before:border-l-[3px] before:border-t-[3px] before:border-b-[3px] before:${beforeRoundedTR} before:${beforeRoundedBR}
                        
                        `
                          : "before:border-[3px] before:rounded-tr-[.375rem] before:rounded-br-[.375rem]"
                      }`
                    : `${
                        featuredProject.name === project.name
                          ? `image-border-expand before:${beforeBorderRight} before:border-l-[3px] before:border-t-[3px] before:border-b-[3px] before:${beforeRoundedTR} before:${beforeRoundedBR}
                        
                        `
                          : "before:border-[3px] before:rounded-tr-[.375rem] before:rounded-br-[.375rem]"
                      }`
                }`}
                onClick={() => displayCard(index)}
              >
                <img
                  src={project.thumbnail}
                  alt="project-image"
                  className={`h-40 w-32 xs:h-44 xs:w-36 md:h-52 md:w-40 lg:h-64 lg:w-48 object-cover
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
                  className={`absolute top-[2.7px] left-[2.6px] bg-teal-gradient text-white rounded-l-[4.2px] 
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
                  <p className="px-1 text-[1.1rem] xs:text-[1.3rem] md:text-[1.1rem] lg:text-[1.4rem]">
                    {project.name}
                  </p>
                </div>
              </div>

              {/* projectDetailsOpen */}

              {featuredProject.name === project.name && showProjectDetails && (
                <div
                  onAnimationEnd={setAnimationState}
                  className={`h-40 w-32 z-0 relative xs:h-44 xs:w-36 md:h-52 md:w-40 lg:h-64 lg:w-48  ${
                    closeAnimation
                      ? "animate-project-close"
                      : "animate-project-expand"
                  }      ${
                    showProjectDetails === true &&
                    project.name === featuredProject.name
                      ? detailsOpacityClass
                      : "opacity-0"
                  } border-[3px] border-white rounded-r-[.375rem] border-l-0 rounded-l-none flex flex-col justify-between`}
                >
                  <div
                    className={`absolute top-[0px] left-0 rounded-r-[.375rem] px-1.5 bg-teal-gradient`}
                  >
                    <h3 className="text-[1.1rem] mx-auto xs:text-[1.2rem] md:text-[1.1rem] lg:text-[1.4rem] ">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-[.716rem] mt-1 px-2.5 absolute top-7 xs:mt-2.5 sm:mt-2 xs:text-[.824rem] sm:text-[.823rem] md:text-[.79rem] md:mt-2 lg:mt-4 lg:text-[1rem] ">
                    {project.description}
                  </p>

                  <div className="flex justify-between relative mx-[.3rem] mb-1">
                    <Link to={project.githubRepo} target="_blank">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="absolute left-[.3rem] bottom-[-9.1rem] text-[1.6rem] xs:text-[1.7rem] xs:bottom-[-10.08rem] md:text-[2.15rem] md:bottom-[-12.08rem] lg:bottom-[-15.08rem] lg:text-[2.6rem]"
                        size="2xl"
                      />
                    </Link>
                    <button>
                      <FontAwesomeIcon
                        icon={faBars}
                        className="absolute left-[2.8rem] bottom-[-9.1rem] text-[1.6rem] xs:left-[3.35rem] xs:text-[1.7rem] xs:bottom-[-10.08rem] md:text-[2.15rem] md:bottom-[-12.08rem] md:left-[3.62rem] lg:bottom-[-15.08rem] lg:left-[4.4rem] lg:text-[2.6rem]"
                        size="2xl"
                        onClick={() => {
                          setProjectIndex(index)
                          openProjectModal(index)
                        }}
                      />
                    </button>
                    <Link to={project.liveLink} target="_blank">
                      <FontAwesomeIcon
                        className="absolute right-[0.3rem] bottom-[-9.1rem] text-[1.4rem] xs:text-[1.5rem] xs:bottom-[-10.05rem] md:bottom-[-12.1rem] md:text-[1.85rem] lg:bottom-[-14.95rem] lg:text-[2.3rem]"
                        icon={faDesktop}
                        size="xl"
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
           
          {/* <ColorPicker /> */}
          {/* </div> */}
        </div>
      </div>
      {viewProjectDetails && <ProjectDetails projectIndex={projectIndex} />}
    </>
  )
}
