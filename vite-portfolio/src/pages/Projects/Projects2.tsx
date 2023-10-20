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
  const { screenWidth, isModalOpen, screenHeight, footerIcons } =
    useContext(GlobalContext)

  const {
    showProjectDetails,
    hasPageRendered,
    setHasPageRendered,
    featuredProject,
    setFeaturedProject,
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

  const [projectIndex, setProjectIndex] = useState<number>(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const selectedProject: Project = projects[selectedImageIndex]

  const projectsLength: number = selectedProject.images.length - 1

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

  const nextBtn = () => {
    if (selectedImageIndex === projectsLength) {
      setSelectedImageIndex(0)
      setFeaturedProject(projects[0])
    } else {
      setSelectedImageIndex(selectedImageIndex + 1)
      setFeaturedProject(projects[selectedImageIndex + 1])
    }
  }

  const prevBtn = () => {
    // setTimeout(() => {
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(projectsLength)
      setFeaturedProject(projects[projectsLength])
    } else {
      setSelectedImageIndex(selectedImageIndex - 1)
      setFeaturedProject(projects[selectedImageIndex - 1])
    }

    // }, 500)
  }

  // useEffect(() => {
  //   console.log("closeAnimation", closeAnimation)
  //   console.log("featuredProject", featuredProject)
  //   console.log("selectedImageIndex", selectedImageIndex)
  // }, [selectedImageIndex])

  return (
    <>
      <div
        className={`flex flex-col min-w-full  ${screenHeight <650 ? "min-h-[650px]" : "min-h-[calc (100vh-48px)]"} overflow-x-scroll overflow-y-auto   
        ${(isModalOpen || viewProjectDetails) && "filter brightness-[40%]"}`}
      >
        <div>
          <h1 className="text-[2.5rem] pt-2 pl-2 text-white font-oswald uppercase">
            Projects
          </h1>
        </div>
        <div className="flex flex-col font-oswald z-30 my-[7%] text-white h-[54vh]  sm:flex-row sm:flex-wrap sm:justify-start sm:pl-4">
          {/* Projects */}

          {/* {projects.map((project: Project, index: number) => ( */}
          <div
            key={selectedImageIndex}
            className={`flex flex-col relative items-center ${
              screenWidth >= 320 ? "" : "w-[320px] pr-3"
            }   mx-auto z-30 sm:w-[48%] sm:ml-0 sm:mr-0`}
          >
            <div
              className={`before:rounded-tl-md before:z-50 h-48 w-64 z-40 relative img-border before:rounded-tr-md text-[.8rem] xs:h-44 xs:w-36 md:h-52 md:w-40 lg:h-64 lg:w-48 ${
                closeAnimation
                  ? `${
                      featuredProject.name === selectedProject.name
                        ? `image-border-close before:border-r-[3px] before:border-l-[3px] before:border-t-[3px] before:rounded-tr-[.375rem] 
                        
                        `
                        : "before:border-[3px] before:rounded-tr-[.375rem] before:rounded-bl-[.375rem] before:rounded-br-[.375rem]"
                    }`
                  : `${
                      featuredProject.name === selectedProject.name
                        ? `image-border-expand before:border-r-[3px] before:border-l-[3px] before:border-t-[3px]  before:rounded-tr-[.375rem]
                        
                        `
                        : "before:border-[3px] before:rounded-tr-[.375rem] before:rounded-br-[.375rem]"
                    }`
              }`}
              onClick={() => displayCard(selectedImageIndex)}
            >
              <img
                src={selectedProject.thumbnail}
                alt="project-image"
                className={`h-48 w-64 xs:h-44 xs:w-36 md:h-52 md:w-40 lg:h-64 lg:w-48 object-cover
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
                  : "opacity-50"
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
                  className={`h-[10rem] w-64 z-10 relative xs:h-44 xs:w-36 md:h-52 md:w-40 lg:h-64 lg:w-48  ${
                    closeAnimation
                      ? "animate-project-close"
                      : "animate-project-expand"
                  }      ${
                    showProjectDetails === true &&
                    selectedProject.name === featuredProject.name
                      ? detailsOpacityClass
                      : "opacity-0"
                  } border-[3px] border-white rounded-br-[.375rem] border-l-[3px] rounded-bl-[.375rem] flex flex-col justify-between`}
                >
                  <div
                    className={`absolute top-[0px] left-0 rounded-r-[.375rem] px-1.5 bg-teal-gradient`}
                  >
                    <h3 className="text-[1.1rem] mx-auto xs:text-[1.2rem] md:text-[1.1rem] lg:text-[1.4rem] ">
                      {selectedProject.name}
                    </h3>
                  </div>
                  <p className="text-[1.1rem] mt-1 px-2.5 absolute top-7 xs:mt-2.5 sm:mt-2 xs:text-[.824rem] sm:text-[.823rem] md:text-[.79rem] md:mt-2 lg:mt-4 lg:text-[1rem] ">
                    {selectedProject.description}
                  </p>

                  <div className="flex justify-between relative mx-[.3rem] mb-1">
                    <Link to={selectedProject.githubRepo} target="_blank">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="absolute left-[.3rem] bottom-[-9.1rem] text-[1.6rem] xs:text-[1.7rem] xs:bottom-[-10.08rem] md:text-[2.15rem] md:bottom-[-12.08rem] lg:bottom-[-15.08rem] lg:text-[2.6rem]"
                        size="2xl"
                      />
                    </Link>
                    <button>
                      <FontAwesomeIcon
                        icon={faBars}
                        className="absolute left-[6.7rem] bottom-[-9.1rem] text-[1.6rem] xs:left-[3.35rem] xs:text-[1.7rem] xs:bottom-[-10.08rem] md:text-[2.15rem] md:bottom-[-12.08rem] md:left-[3.62rem] lg:bottom-[-15.08rem] lg:left-[4.4rem] lg:text-[2.6rem]"
                        size="2xl"
                        onClick={() => {
                          setProjectIndex(selectedImageIndex)
                          openProjectModal(selectedImageIndex)
                        }}
                      />
                    </button>
                    <Link to={selectedProject.liveLink} target="_blank">
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
          {/* ))} */}

          {/* <ColorPicker /> */}
          {/* </div> */}
        </div>
        <div className="flex text-white font-oswald justify-center">
          <div className="flex justify-between bg-black w-full max-w-[240px] items-center">
            <Icon
              icon="maki:arrow"
              className="border rounded-md bg-teal-gradient p-1 text-[2.5rem] rotate-180"
              onClick={() => prevBtn()}
            ></Icon>
            <p className="">
              Project {selectedImageIndex + 1} of{" "}
              {selectedProject.images.length}
            </p>
            <Icon
              icon="maki:arrow"
              className="rounded-md bg-teal-gradient border p-1 text-[2.5rem]"
              onClick={() => nextBtn()}
            ></Icon>
          </div>
        </div>
        <FooterIcons/>
      </div>
      {viewProjectDetails && <ProjectDetails projectIndex={projectIndex} />}
    </>
  )
}
