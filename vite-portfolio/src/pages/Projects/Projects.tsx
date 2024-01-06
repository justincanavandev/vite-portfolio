import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faCircleInfo} from "@fortawesome/free-solid-svg-icons"
import type { Project } from "../../types/project-types/projectTypes"
import { ProjectsContext } from "../../context/ProjectsContext"
import "../../projects.css"
import { Link, useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import FooterIcons from "../../components/FooterIcons"

export default function Projects2() {
  const {
    screenWidth,
    isModalOpen,
    screenHeight,
    openOrClose,
    setOpenOrClose,
  } = useContext(GlobalContext)
  const navigate = useNavigate()

  const {
    showProjectDetails,
    setShowProjectDetails,
    hasPageRendered,
    setHasPageRendered,
    featuredProject,
    setFeaturedProject,
    closeAnimation,
    setCloseAnimation,
    imgOpacityClass,
    setImgOpacityClass,
    setBannerOpacity,
    projects,
    displayCard,
    setAnimationState,
    setBeforeRounded,
    viewProjectDetails,
    setViewProjectDetails,
    setProjectIndex,
  } = useContext(ProjectsContext)

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const selectedProject: Project = projects[selectedImageIndex]

  const openProjectModal = (index: number) => {
    setViewProjectDetails(true)
  }

  useEffect(() => {
    if (hasPageRendered === false) {
      setTimeout(() => {
        setImgOpacityClass("brightness-100")
        setBannerOpacity("opacity-0")
        setBeforeRounded("")
      }, 300)
      setHasPageRendered(true)
    }
  }, [])

  const nextBtn = () => {
    if (selectedImageIndex === projects.length - 1 && !showProjectDetails) {
      console.log("one")
      setCloseAnimation(false)
      setShowProjectDetails(true)

      setSelectedImageIndex(0)
      setFeaturedProject(projects[0])
    }
    if (selectedImageIndex !== projects.length - 1 && showProjectDetails) {
      console.log("two")
      setCloseAnimation(false)
      setSelectedImageIndex(selectedImageIndex + 1)
      setFeaturedProject(projects[selectedImageIndex + 1])
    }

    if (selectedImageIndex === projects.length - 1 && showProjectDetails) {
      console.log("three")
      setSelectedImageIndex(0)
      setFeaturedProject(projects[0])
    }
    if (selectedImageIndex !== projects.length - 1 && !showProjectDetails) {
      console.log("four")
      setCloseAnimation(false)
      setShowProjectDetails(true)
      setSelectedImageIndex(selectedImageIndex + 1)
      setFeaturedProject(projects[selectedImageIndex + 1])
    }
  }

  const prevBtn = () => {
    if (selectedImageIndex === 0 && !showProjectDetails) {
      console.log("one")
      setCloseAnimation(false)
      setShowProjectDetails(true)
      setSelectedImageIndex(projects.length - 1)
      setFeaturedProject(projects[projects.length - 1])
    }

    if (selectedImageIndex === 0 && showProjectDetails) {
      console.log("two")
      setCloseAnimation(false)
      setShowProjectDetails(true)
      setSelectedImageIndex(projects.length - 1)
      setFeaturedProject(projects[projects.length - 1])
    }
    if (selectedImageIndex !== 0 && showProjectDetails) {
      console.log("three")
      setCloseAnimation(false)
      setSelectedImageIndex(selectedImageIndex - 1)
      setFeaturedProject(projects[selectedImageIndex - 1])
    }

    if (selectedImageIndex !== 0 && !showProjectDetails) {
      console.log("four")
      setCloseAnimation(false)
      setShowProjectDetails(true)
      setSelectedImageIndex(selectedImageIndex - 1)
      setFeaturedProject(projects[selectedImageIndex - 1])
    }
  }

  // useEffect(() => {
  //   console.log("closeAnimation", closeAnimation)
  //   console.log("selectedImageIndex", selectedImageIndex)
  //   console.log("showProjectDetails", showProjectDetails)
  //   console.log("selectedProject", selectedProject)
  //   console.log("screenWidth", screenWidth)
  // }, [selectedImageIndex])

  const nextPrevBtns = (
    <>
      <div className="flex justify-between bg-black w-full max-w-[240px] items-center z-0 sm:h-[100px] sm:max-w-none sm:flex-col sm:absolute right-[.2rem] top-[-5.5rem] sm:w-[150px] sm:justify-evenly md:top-0 md:right-[-.2rem]">
        <p className="hidden sm:flex sm:text-[1.45rem] ">
          Project {selectedImageIndex + 1} of {selectedProject.images.length}
        </p>
        <div className="sm:flex sm:gap-4">
          <Icon
            icon="maki:arrow"
            className="border rotate-180 rounded-md bg-teal-gradient p-1 text-[2.5rem] xs:text-[2.7rem] sm:text-[3rem]"
            onClick={() => prevBtn()}
          ></Icon>
          <Icon
            icon="maki:arrow"
            className="hidden rounded-md bg-teal-gradient border p-1 text-[2.5rem] sm:text-[3rem] sm:flex"
            onClick={() => nextBtn()}
          ></Icon>
        </div>
        <p className="xs:text-[1.2rem] sm:hidden">
          Project {selectedImageIndex + 1} of {selectedProject.images.length}
        </p>
        <Icon
          icon="maki:arrow"
          className="rounded-md bg-teal-gradient border p-1 text-[2.5rem] xs:text-[2.7rem] sm:hidden"
          onClick={() => nextBtn()}
        ></Icon>
      </div>
    </>
  )
  useEffect(() => {
    console.log("isModalOpen", isModalOpen)
    console.log("viewProjectDetails", viewProjectDetails)
    console.log("openOrClose", openOrClose)
  }, [isModalOpen, viewProjectDetails, openOrClose])

  useEffect(() => {
    setViewProjectDetails(true)
  }, [])

  return (
    <>
      <div
        className={`flex flex-col min-w-full  ${
          screenHeight < 650 ? "h-[602px]" : "min-h-[calc(100vh-48px)]"
        } overflow-x-scroll overflow-y-scroll
       
        
        ${
          isModalOpen
            ? openOrClose
              ? "animate-open-filter-brightness"
              : "animate-close-filter-brightness"
            : ""
        }  
        ${
          isModalOpen
            ? "filter brightness-[40%]"
            : "filter brightness-[100%] animate-close-filter-brightness"
        }
        `}
      >
        <div className="sm:w-[200px]">
          <h1 className="text-[2.5rem] pt-2 pl-2 text-white font-oswald uppercase sm:text-[3rem] sm:inline-block ">
            Projects
          </h1>
        </div>
        <div
          className={`flex relative flex-col font-oswald z-30 mt-[2vh] text-white sm:mt-[1vh]
          ${
            screenHeight >= 650
              ? showProjectDetails
                ? `h-[70vh] sm:h-[72vh]`
                : " lg:h-[70vh] "
              : showProjectDetails
              ? "h-[29.6rem] sm:h-[31.7rem]"
              : "h-[50rem]"
          }  sm:flex-row sm:flex-wrap sm:justify-center md:w-[100%] md:static`}
        >
          {/* Projects */}

          <div
            key={selectedImageIndex}
            className={`flex flex-col relative items-center ${
              screenWidth >= 320 ? "" : "w-[320px] pr-3"
            }   mx-auto  z-30  sm:mt-[5vh] sm:static  sm:items-start md:items-center md:mt-[4.5vh] lg:mt-2`}
          >
            <div className=" ">
              <div className="flex flex-col items-center">
                <div
                  className={`before:rounded-t-md before:z-40 cursor-pointer h-[18rem] w-[95%] z-30 relative img-border rounded-b-md text-[.8rem] xs:h-[17rem] xs:w-[28rem] sm:w-[36rem] sm:h-[21rem] md:w-[40rem]  lg:w-[44rem] lg:h-[22rem] ${
                    closeAnimation
                      ? `${
                          featuredProject.name === selectedProject.name
                            ? `image-border-close  before:border-r-[3px] before:border-l-[3px] before:rounded-b before:border-b-[3px] before:border-t-[3px] 
                        
                        `
                            : "before:border-[3px] before:rounded-tr-[.375rem] before:rounded-bl-[.375rem] before:rounded-br-[.375rem]"
                        }`
                      : `${
                          featuredProject.name === selectedProject.name
                            ? `image-border-expand  before:border-r-[3px] before:border-l-[3px] before:border-b-[3px] before:border-t-[3px]  before:rounded-tr-[.375rem]
                        
                        `
                            : "before:border-[3px] before:rounded-tr-[.375rem] before:rounded-br-[.375rem]"
                        }`
                  }`}
                  onClick={() => displayCard(selectedImageIndex)}
                >
                  {/* proj title 2 */}

                  <img
                    src={selectedProject.thumbnail}
                    alt="project-image"
                    className={`h-[18rem]  w-full xs:h-[17rem] xs:w-[28rem] sm:w-[36rem] sm:h-[21rem]  md:w-[40rem] lg:h-[22rem] lg:w-[44rem] object-left-top object-cover xs:object-top 
                ${
                  closeAnimation
                    ? `${
                        featuredProject.name === selectedProject.name
                          ? `image-opacity-close `
                          : ""
                      }`
                    : `${
                        featuredProject.name === selectedProject.name
                          ? `image-opacity-expand `
                          : ""
                      }`
                }
                 overflow-hidden rounded-[.375rem] 
             ${
               featuredProject.name === selectedProject.name ? "rounded-r" : ""
             } 
              ${
                showProjectDetails === true &&
                selectedProject.name === featuredProject.name
                  ? `${imgOpacityClass}`
                  : "brightness-50"
              }
              
               `}
                  />

                  <div className="absolute top-[2.7px] left-[2.6px] bg-teal-gradient text-white rounded-l-[4.2px] ">
                    <p className="px-1 text-[1.1rem] xs:text-[1.3rem] md:text-[1.1rem] lg:text-[1.4rem]">
                      {selectedProject.name}
                    </p>
                  </div>
                </div>

                {/* projectDetailsOpen */}

                {featuredProject.name === selectedProject.name &&
                  showProjectDetails && (
                    <div
                      onAnimationEnd={setAnimationState}
                      className={`h-[6.2rem] w-[95%] z-10 relative xs:h-[6.8rem] xs:w-[28rem] sm:w-[36rem] sm:h-[4.9rem]  md:w-[40rem] lg:h-[5.2rem]  lg:w-[44rem]  ${
                        closeAnimation
                          ? "animate-project-details-close sm:animate-project-details-close-sm"
                          : "animate-project-details-open"
                      }      border-r-[3px] border-b-[3px] border border-white rounded-br-[.375rem] border-l-[3px] rounded-bl-[.375rem] flex flex-col justify-between`}
                    >
                      {/* nextPrevBtns */}
                      <div className="flex justify-center sm:hidden">
                        <div
                          className={`absolute bottom-[-4rem] w-[230px] mt-4 `}
                        >
                          {nextPrevBtns}
                        </div>
                      </div>

                      <div className="sm:flex sm:relative">
                        <p className="text-[1rem] mb-1 line-clamp-2 mt-[.35rem] px-2.5 absolute top-0 xs:mt-1.5 xs:text-[1.15rem] sm:w-[350px] sm:mt-2 sm:static md:w-[410px] md:text-[1.2rem] lg:w-[520px] lg:text-[1.4rem] ">
                          {selectedProject.description}
                        </p>

                        <div className="flex justify-between relative mx-[.3rem] mb-1 sm:my-1 sm:gap-6 sm:absolute sm:items-center sm:h-full sm:right-1 ">
                          <Link to={selectedProject.githubRepo} target="_blank">
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="absolute text-white left-[.5rem] bottom-[.3rem] text-[1.6rem] xs:text-[1.7rem] xs:bottom-[.5rem] sm:static sm:text-[2.3rem] md:text-[2.5rem] "
                              size="2xl"
                            />
                          </Link>
                          <button>
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className={`absolute left-0 ${
                                screenWidth < 475 && "right-0"
                              } pulse mx-auto bottom-[.3rem] text-[1.6rem] xs:left-[12.7rem] xs:text-[1.7rem] xs:bottom-[.5rem] sm:static sm:text-[2.3rem] md:text-[2.5rem]`}
                              size="2xl"
                              onClick={() => {
                                setProjectIndex(selectedImageIndex)
                                openProjectModal(selectedImageIndex)
                                navigate(`/projects/${selectedProject.id}`)
                              }}
                            />
                          </button>
                          <Link to={selectedProject.liveLink} target="_blank">
                            <FontAwesomeIcon
                              className="absolute text-white right-[0.3rem] bottom-[.3rem] text-[1.4rem] xs:text-[1.5rem] xs:bottom-[.5rem] sm:static sm:text-[1.95rem] md:text-[2.25rem]"
                              icon={faDesktop}
                              size="xl"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
              <div className="hidden sm:flex sm:w-[100px] ">{nextPrevBtns}</div>
            </div>
          </div>
        </div>

        <FooterIcons />
      </div>
    </>
  )
}
