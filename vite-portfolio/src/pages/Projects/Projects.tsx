import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import type { Project } from "../../types/project-types/projectTypes"
import { ProjectsContext } from "../../context/ProjectsContext"
import "../../projects.css"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
// import FooterIcons from "../../components/FooterIcons"

export default function Projects2() {
  const {
    // screenWidth,
    isModalOpen,
    // screenHeight,
    openOrClose,
    // setOpenOrClose,
  } = useContext(GlobalContext)
  // const navigate = useNavigate()

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
    // viewProjectDetails,
    setViewProjectDetails,
    // setProjectIndex,
  } = useContext(ProjectsContext)

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const selectedProject: Project = projects[selectedImageIndex]

  // const openProjectModal = () => {
  //   setViewProjectDetails(true)
  // }

  useEffect(() => {
    if (hasPageRendered === false) {
      setTimeout(() => {
        setImgOpacityClass("brightness-100")
        setBannerOpacity("opacity-0")
        setBeforeRounded("")
      }, 300)
      setHasPageRendered(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="flex justify-between bg-black w-full max-w-[240px] items-center z-0 sm:max-w-none sm:w-[280px]">
        {/* <p className="hidden sm:flex sm:text-[1.45rem] ">
          Project {selectedImageIndex + 1} of {projects.length}
        </p> */}
        <div className="">
          <Icon
            icon="maki:arrow"
            className="border rotate-180 rounded-md bg-darkTeal p-1 text-[2.5rem] xs:text-[2.7rem] sm:text-[3rem]"
            onClick={() => prevBtn()}
          ></Icon>
          {/* <Icon
            icon="maki:arrow"
            className="hidden rounded-md border p-1 text-[2.5rem] sm:text-[3rem] sm:flex"
            onClick={() => nextBtn()}
          ></Icon> */}
        </div>
        <p className="xs:text-[1.2rem] sm:text-[1.45rem]">
          Project {selectedImageIndex + 1} of {projects.length}
        </p>
        <Icon
          icon="maki:arrow"
          className="rounded-md bg-darkTeal border p-1 text-[2.5rem] xs:text-[2.7rem] sm:text-[3rem] sm:flex"
          onClick={() => nextBtn()}
        ></Icon>
      </div>
    </>
  )
  // useEffect(() => {
  //   console.log("isModalOpen", isModalOpen)
  //   console.log("viewProjectDetails", viewProjectDetails)
  //   console.log("openOrClose", openOrClose)
  // }, [isModalOpen, viewProjectDetails, openOrClose])

  useEffect(() => {
    setViewProjectDetails(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div
        id="projects"
        className={`flex flex-col min-w-full mb-8
       
        
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
        <div className=" bg-darkTeal sm:pl-3 w-fit pr-8 rounded-r-full">
          <h1 className=" pl-2 text-white font-oswald uppercase text-[2rem] sm:text-[2.5rem] 2xl:text-[2.75rem] sm:inline-block ">
            Projects
          </h1>
        </div>
        <div
          className={`flex relative flex-col font-oswald z-30 mt-6 text-white 
    
           sm:flex-row sm:flex-wrap sm:justify-center md:w-[100%] md:static`}
        >
          {/* Projects */}

          <div
            key={selectedImageIndex}
            className={`flex flex-col relative items-center  mx-auto  z-30   sm:static  sm:items-start md:items-center lg:mt-2`}
          >
            <div className=" ">
              <div className="flex flex-col items-center">
                <div
                  className={`before:rounded-t-md before:z-40 cursor-pointer h-[18rem] w-[95%] z-30 relative img-border rounded-b-md text-[.8rem] xs:h-[17rem] xs:w-[28rem] sm:w-[36rem] sm:h-[21rem] md:w-[40rem]  lg:w-[44rem] lg:h-[22rem] xl:w-[55rem] xl:h-[28rem] 2xl:w-[66rem] 2xl:h-[33rem] ${
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
                    className={`h-[18rem]  w-full xs:h-[17rem] xs:w-[28rem] sm:w-[36rem] sm:h-[21rem]  md:w-[40rem] lg:h-[22rem] lg:w-[44rem] xl:w-[55rem] xl:h-[28rem] 2xl:w-[66rem] 2xl:h-[33rem]  object-cover ${selectedProject.name === "Guild Gaming" || selectedProject.name === "CodeCove"  ? "object-left-top" : "object-top"} xs:object-top 
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

                  <div className="absolute top-[2.7px] left-[2.6px] bg-darkTeal text-white rounded-l-[4.2px] ">
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
                      className={` h-auto flex w-[95%] z-10 relative  xs:w-[28rem] sm:w-[36rem] sm:gap-2   md:w-[40rem]  lg:w-[44rem] xl:w-[55rem] 2xl:w-[66rem]  ${
                        closeAnimation
                          ? "animate-project-details-close sm:animate-project-details-close-sm"
                          : "animate-project-details-open"
                      }      border-r-[3px] border-b-[3px] border border-white rounded-br-[.375rem] border-l-[3px] rounded-bl-[.375rem] flex flex-col justify-between`}
                    >
                      {/* nextPrevBtns */}
                      {/* <div className="flex justify-center sm:hidden"></div> */}

                      <div className="flex flex-col items-center">
                        <p className="text-[1rem] mb-1 line-clamp-2 mt-[.35rem] px-2.5 xs:mt-1.5 xs:text-[1.15rem] sm:text-center sm:w-[500px] sm:mt-2 sm:static md:w-[600px] md:text-[1.3rem] lg:w-[650px] lg:text-[1.7rem] 2xl:w-[800px]">
                          {selectedProject.description}
                        </p>

                        <div className="flex justify-between gap-2 relative mx-[.3rem] mb-1 sm:my-1 sm:gap-6 sm:absolute sm:items-center sm:h-full sm:right-1 ">
                          {/* <Link to={selectedProject.githubRepo} target="_blank">
                            <FontAwesomeIcon
                              icon={faGithub}
                              className=" text-white left-[.5rem] bottom-[.3rem] text-[1.6rem] xs:text-[1.7rem] xs:bottom-[.5rem] sm:static sm:text-[2.3rem] md:text-[2.5rem] "
                              size="2xl"
                            />
                          </Link> */}
                          {/* <button>
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className={`absolute left-0 ${
                                screenWidth < 475 && "right-0"
                              } pulse mx-auto bottom-[.3rem] text-[1.6rem] xs:left-[12.7rem] xs:text-[1.7rem] xs:bottom-[.5rem] sm:static sm:text-[2.3rem] md:text-[2.5rem]`}
                              size="2xl"
                              onClick={() => {
                                setProjectIndex(selectedImageIndex)
                                openProjectModal()
                                navigate(`/projects/${selectedProject.id}`)
                              }}
                            />
                          </button> */}
                          {/* <Link to={selectedProject.liveLink} target="_blank">
                            <FontAwesomeIcon
                              className=" text-white r text-[1.4rem] xs:text-[1.5rem] xs:bottom-[.5rem] sm:text-[1.95rem] md:text-[2.25rem]"
                              icon={faDesktop}
                              size="xl"
                            />
                          </Link> */}
                        </div>
                      </div>
                      <div className="flex px-2 justify-center">
                        <div className="flex justify-between w-full">
                          <Link to={selectedProject.githubRepo} target="_blank">
                            <FontAwesomeIcon
                              icon={faGithub}
                              className=" text-white pb-2 left-[.5rem] text-[1.6rem] xs:text-[1.7rem]  sm:text-[2.3rem] md:text-[2.5rem] lg:text-[2.75rem] "
                              size="2xl"
                            />
                          </Link>
                          <div className="flex gap-1.5 xs:gap-2 lg:gap-4">
                            {selectedProject.icons.map(
                              (icon, iconIndex) =>
                         
                                  <Icon
                                    className={`text-[1.5rem] ${iconIndex >= 7 && "hidden"} xs:static xs:text-[1.7rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.7rem]`}
                                    icon={icon.icon}
                                  ></Icon>
                      
                            )}
                          </div>
                          <Link to={selectedProject.liveLink} target="_blank">
                            <FontAwesomeIcon
                              className=" text-white pb-.5 text-[1.4rem] xs:text-[1.5rem] xs:bottom-[.5rem] sm:text-[1.95rem] md:text-[2.25rem] lg:text-[2.5rem]"
                              icon={faDesktop}
                              size="xl"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
              <div className="flex justify-center mt-4">{nextPrevBtns}</div>
            </div>
          </div>
        </div>

        {/* <FooterIcons /> */}
      </div>
    </>
  )
}
