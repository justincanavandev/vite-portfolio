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
import { Icon } from "@iconify/react/dist/iconify.js"
import FooterIcons from "../../components/FooterIcons"

export default function Projects2() {
  const { screenWidth, isModalOpen, screenHeight } = useContext(GlobalContext)

  const {
    showProjectDetails,
    setShowProjectDetails,
    hasPageRendered,
    setHasPageRendered,
    featuredProject,
    setFeaturedProject,
    borderRight,
    closeAnimation,
    setCloseAnimation,
    imgOpacityClass,
    setImgOpacityClass,
    detailsOpacityClass,
    bannerOpacity,
    setBannerOpacity,
    projects,
    displayCard,
    setAnimationState,
    // beforeBorderRight,
    // beforeRoundedTR,
    // beforeRoundedBR,
    // beforeRounded,
    setBeforeRounded,
    viewProjectDetails,
    setViewProjectDetails,
  } = useContext(ProjectsContext)

  const openProjectModal = (index: number) => {
    console.log("index", index)

    setViewProjectDetails(true)
  }

  // console.log("showProjectDetails", showProjectDetails)

  const [projectIndex, setProjectIndex] = useState<number>(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  const selectedProject: Project = projects[selectedImageIndex]

  const projectsLength: number = selectedProject.images.length - 1

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

  // const nextBtn = () => {
  //   if (selectedImageIndex === projectsLength) {
  //     setSelectedImageIndex(0)
  //     setFeaturedProject(projects[0])
  //   } else {
  //     setSelectedImageIndex(selectedImageIndex + 1)
  //     setFeaturedProject(projects[selectedImageIndex + 1])
  //   }
  // }
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
      // setShowProjectDetails(true)
      // setSelectedImageIndex(0)
      // setFeaturedProject(projects[0])
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
    // setTimeout(() => {
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
      // setShowProjectDetails(true)
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

  useEffect(() => {
    console.log("closeAnimation", closeAnimation)
    // console.log("featuredProject", featuredProject)
    console.log("selectedImageIndex", selectedImageIndex)
    console.log("showProjectDetails", showProjectDetails)
    console.log("selectedProject", selectedProject)
  }, [selectedImageIndex])

  const nextPrevBtns = (
    <>
      <div className="flex justify-between bg-black w-full max-w-[240px] items-center z-0 sm:h-[100px] sm:max-w-none sm:flex-col sm:absolute right-[.2rem] top-[-5.5rem] sm:w-[150px] sm:justify-evenly md:top-[3rem] md:right-[-.2rem]">
        <p className="hidden sm:flex sm:text-[1.45rem]">
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

  return (
    <>
      <div
        className={`flex flex-col min-w-full  ${
          screenHeight < 650 ? "h-[602px]" : "min-h-[calc(100vh-48px)"
        } overflow-x-scroll overflow-y-scroll   
        ${(isModalOpen || viewProjectDetails) && "filter brightness-[40%]"}`}
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
                : "h-[44vh] sm:h-[55vh] lg:h-[70vh] "
              : showProjectDetails
              ? "h-[30rem] sm:h-[31.7rem]"
              : "h-[50rem]"
          }  sm:flex-row sm:flex-wrap sm:justify-center md:w-[100%] md:static`}
        >
          {/* Projects */}

          {/* {projects.map((project: Project, index: number) => ( */}
          <div
            key={selectedImageIndex}
            className={`flex flex-col relative items-center ${
              screenWidth >= 320 ? "" : "w-[320px] pr-3"
            }   mx-auto  z-30  sm:mt-[5vh] sm:static  sm:items-start md:items-center md:mt-[4.5vh] lg:mt-2`}
          >
            <div className=" ">
              <div className="">
                <div
                  className={`before:rounded-t-md before:z-50 h-[14rem] w-64 z-40 relative img-border rounded-b-md text-[.8rem] xs:h-[14rem] xs:w-[28rem] sm:w-[36rem] sm:h-[19.5rem] md:w-[40rem]  lg:w-[40rem] lg:h-[20rem] ${
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
                  <img
                    src={selectedProject.thumbnail}
                    alt="project-image"
                    className={`h-[14rem]  w-64 xs:h-[14rem] xs:w-[28rem] sm:w-[36rem] sm:h-[19.5rem]  md:w-[40rem] lg:h-[20rem]  lg:w-[40rem] object-left-top object-cover xs:object-top 
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

                  <div
                    className={`absolute top-[2.7px] left-[2.6px] bg-teal-gradient text-white rounded-l-[4.2px] 
                ${
                  showProjectDetails &&
                  selectedProject.name === featuredProject.name
                    ? bannerOpacity
                    : "opacity-100"
                }
                ${
                  closeAnimation
                    ? `
                    ${
                      featuredProject.name === selectedProject.name
                        ? "animate-banner-opacity-expand"
                        : ""
                    }`
                    : `${
                        featuredProject.name === selectedProject.name
                          ? "animate-banner-opacity-close"
                          : ""
                      }`
                }
                `}
                  >
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
                      className={`h-[10rem] w-64 z-10 relative xs:h-36 xs:w-[28rem] sm:w-[36rem] sm:h-[6.3rem]  md:w-[40rem]  lg:w-[40rem]  ${
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
                      <div
                        className={`absolute top-0 left-0 rounded-r-[.375rem] px-1.5 bg-teal-gradient`}
                      >
                        <h3 className="text-[1.1rem] mx-auto xs:text-[1.3rem] md:text-[1.3rem] lg:text-[1.4rem]">
                          {selectedProject.name}
                        </h3>
                      </div>
                      <div className="sm:flex sm:relative">
                        <p className="text-[1.1rem] mt-1 px-2.5 absolute top-7 xs:mt-2.5 xs:text-[1.15rem] sm:w-[350px] sm:mt-[2.2rem] sm:static md:mt-8 md:w-[410px] md:text-[1.2rem] lg:mt-10  lg:w-[588px] lg:text-[1.4rem] ">
                          {selectedProject.description}
                        </p>

                        <div className="flex justify-between relative mx-[.3rem] mb-1 sm:my-1 sm:gap-6 sm:absolute sm:items-center sm:h-full right-1 ">
                          <Link to={selectedProject.githubRepo} target="_blank">
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="absolute left-[.3rem] bottom-[.3rem] text-[1.6rem] xs:text-[1.7rem] xs:bottom-[.5rem] sm:static sm:text-[2.3rem] md:text-[2.5rem] "
                              size="2xl"
                            />
                          </Link>
                          <button>
                            <FontAwesomeIcon
                              icon={faBars}
                              className="absolute left-[6.7rem] bottom-[.3rem] text-[1.6rem] xs:left-[12.7rem] xs:text-[1.7rem] xs:bottom-[.5rem] sm:static sm:text-[2.3rem] md:text-[2.5rem]"
                              size="2xl"
                              onClick={() => {
                                setProjectIndex(selectedImageIndex)
                                openProjectModal(selectedImageIndex)
                              }}
                            />
                          </button>
                          <Link to={selectedProject.liveLink} target="_blank">
                            <FontAwesomeIcon
                              className="absolute right-[0.3rem] bottom-[.3rem] text-[1.4rem] xs:text-[1.5rem] xs:bottom-[.5rem] sm:static sm:text-[1.95rem] md:text-[2.25rem]"
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
          {/* {screenHeight < 650 && screenWidth < 640 && <FooterIcons />} */}
        </div>
{/* 
        {(screenHeight >= 650 ||
          screenHeight < 650 )
           &&  */}
           <FooterIcons />
          
       
      </div>
      {viewProjectDetails && <ProjectDetails projectIndex={projectIndex} />}
    </>
  )
}
