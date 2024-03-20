import { ProjectsContext } from "../../context/ProjectsContext"
import { useContext, useState, useEffect, useRef } from "react"
import type { Project } from "../../types/project-types/projectTypes"
import { Icon } from "@iconify/react"
import { Icon as IconType } from "../../types/project-types/projectTypes"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import "../../projects.css"
// import FooterIcons from "../../components/FooterIcons"
// import { faRotateLeft } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ProjectDetails() {
  const { projects } = useContext(ProjectsContext)

  const { screenWidth, screenHeight, isModalOpen } = useContext(GlobalContext)
  const imgParentDiv = useRef<HTMLDivElement>(null)
  const { projectId } = useParams()
  const [selectedProject, setSelectedProject] = useState<Project>({
    id: 0,
    name: "",
    githubRepo: "",
    liveLink: "",
    thumbnail: "",
    description: "",
    icons: [
      {
        title: "",
        icon: "",
      },
    ],
    images: [""],
  })

  const [closingOrOpening, setClosingOrOpening] = useState<boolean>(false)
  let projectIdNum: number

  const [selectedIcon, setSelectedIcon] = useState<IconType>({
    title: "",
    icon: "",
  })
  const [imagesLength, setImagesLength] = useState<number>(0)
  const [animationClassActive, setAnimationClassActive] =
    useState<boolean>(false)

  const [isTitleAnimActive, setIsTitleAnimActive] = useState<boolean>(false)

  const [displayModalIcon, setDisplayModalIcon] = useState<boolean>(true)
  const [firstImage, setFirstImage] = useState<number>(0)

  useEffect(() => {
    if (projectId) {
      projectIdNum = parseInt(projectId)
      const projectIdNumIndex = projectIdNum - 1
      setSelectedProject(projects[projectIdNumIndex])
      setSelectedIcon({
        title: selectedProject.icons[0].title,
        icon: selectedProject.icons[0].icon,
      })
      setImagesLength(selectedProject.images.length - 1)
    }
  }, [selectedProject])

  const showIconTitle = (icon: IconType) => {
    if (selectedIcon !== icon) {
      setSelectedIcon(icon)
    }
    if (displayModalIcon === false) {
      setDisplayModalIcon(true)
    }
  }

  // useEffect(() => {
  //   console.log("animationClassActive", animationClassActive)
  //   console.log("isTitleAnimActive", isTitleAnimActive)
  // }, [isTitleAnimActive])

  const nextBtn = () => {
    setClosingOrOpening(true)
    setAnimationClassActive(true)

    setTimeout(() => {
      if (firstImage === imagesLength) {
        setFirstImage(0)
      } else {
        setFirstImage(firstImage + 1)
      }

      setClosingOrOpening((prevState) => {
        return !prevState
      })
      setAnimationClassActive((prevState) => {
        return !prevState
      })

      setAnimationClassActive((prevState) => {
        return !prevState
      })
    }, 500)

    setAnimationClassActive((prevState) => {
      return !prevState
    })
  }

  const prevBtn = () => {
    setAnimationClassActive(true)
    setClosingOrOpening(true)

    setTimeout(() => {
      if (firstImage === 0) {
        setFirstImage(imagesLength)
      } else {
        setFirstImage(firstImage - 1)
      }

      setClosingOrOpening((prevState) => {
        return !prevState
      })
      setAnimationClassActive((prevState) => {
        return !prevState
      })

      setAnimationClassActive((prevState) => {
        return !prevState
      })
    }, 500)

    setAnimationClassActive((prevState) => {
      return !prevState
    })
  }

  // useEffect(() => {
  //   console.log("animClassActive", animationClassActive)
  //   console.log("closingOrOpen", closingOrOpening)
  // }, [animationClassActive, closingOrOpening])

  // handle image scrolling

  const imgTag: React.LegacyRef<HTMLImageElement> | undefined = useRef(null)
  const [isMouseHovering, setIsMouseHovering] = useState<boolean>(false)
  const [imgXCoord, setImgXCoord] = useState<number>(0)
  const [imgYCoord, setImgYCoord] = useState<number>(0)
  const [objPositionLR, setObjPositionLR] = useState<string>("50%")
  const [objPositionTB, setObjPositionTB] = useState<string>("0%")
  const [imgWidth, setImgWidth] = useState<number>(0)
  const [imgWidthClass, setImgWidthClass] = useState<string>("")
  const [imgHeight, setImgHeight] = useState<number>(0)
  const [imgHeightClass, setImgHeightClass] = useState<string>("")

  const handleMouseMove = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (isMouseHovering) {
      if (imgTag.current) {
        setImgXCoord(
          Math.round(
            e.clientX - imgTag.current.getBoundingClientRect().left + 1
          )
        )

        setImgYCoord(
          Math.round(e.clientY - imgTag.current.getBoundingClientRect().top + 1)
        )
      }
    }
  }

  useEffect(() => {
    let objWidthPercentage
    if (isMouseHovering) {
      objWidthPercentage = Math.round((imgXCoord / imgWidth) * 100 - 15)
    } else {
      objWidthPercentage = Math.round((imgXCoord / imgWidth) * 100)
    }

    objWidthPercentage = Math.min(100, Math.max(0, objWidthPercentage))

    setObjPositionLR(`${objWidthPercentage.toString()}%`)
  }, [imgXCoord, imgWidth, isMouseHovering])

  useEffect(() => {
    let objHeightPercentage
    if (isMouseHovering) {
      objHeightPercentage = Math.round((imgYCoord / imgHeight) * 100 - 15)
    } else {
      objHeightPercentage = Math.round((imgYCoord / imgHeight) * 100)
    }
    setObjPositionTB(`${objHeightPercentage.toString()}%`)
  }, [imgYCoord, imgHeight, isMouseHovering])

  // useEffect(() => {
  //   // console.log("imgXCoord", imgXCoord)
  //   // console.log("imgYCoord", imgYCoord)
  //   // console.log("objLR", objPositionLR)
  //   // console.log("objTB", objPositionTB)
  //   console.log("isMouseHovering", isMouseHovering)
  // }, [imgXCoord, imgYCoord, objPositionLR, objPositionTB, isMouseHovering])

  useEffect(() => {
    if (screenWidth < 475) {
      setImgWidth(230)
      setImgWidthClass("w-[230px]")
      setImgHeight(224)
      setImgHeightClass("h-[224px]")
    }
    if (screenWidth >= 475 && screenWidth < 640) {
      setImgWidth(300)
      setImgWidthClass("w-[300px]")
      setImgHeight(250)
      setImgHeightClass("h-[250px]")
    }
    if (screenWidth >= 640 && screenWidth < 768) {
      setImgWidth(400)
      setImgWidthClass("w-[400px]")
      setImgHeight(300)
      setImgHeightClass("h-[300px]")
    }
    if (screenWidth >= 768 && screenWidth < 1024) {
      setImgWidth(450)
      setImgWidthClass("w-[450px]")
      setImgHeight(320)
      setImgHeightClass("h-[320px]")
    }
    if (screenWidth >= 1024 && screenWidth < 1280) {
      setImgWidth(500)
      setImgWidthClass("w-[500px]")
      setImgHeight(375)
      setImgHeightClass("h-[375px]")
    }
    if (screenWidth >= 1280 && screenWidth < 1536) {
      setImgWidth(500)
      setImgWidthClass("w-[550px]")
      setImgHeight(375)
      setImgHeightClass("h-[410px]")
    }
    if (screenWidth >= 1536) {
      setImgWidth(500)
      setImgWidthClass("w-[550px]")
      setImgHeight(375)
      setImgHeightClass("h-[410px]")
    }
  }, [screenWidth])

  const prevNextBtns = (
    <>
      <div
        className={`flex w-full items-center justify-evenly sm:items-start sm:mt-2 lg:h-auto lg:justify-end lg:absolute lg:top-[96px] lg:right-[15px] ${
          screenHeight >= 650
            ? "mt-4 xs:mt-4 sm:mt-0"
            : "absolute bottom-[-55px] sm:mt-1 md:static"
        } `}
      >
        <div
          className={`${
            isMouseHovering && screenWidth < 640 && "text-transparent "
          } flex sm:w-[205px] transition-opacity duration-300 ease-in-out gap-6 items-center sm:gap-4 lg:w-[220px]`}
        >
          <Icon
            icon="maki:arrow"
            className={`border rounded-md 
                  ${
                    isMouseHovering && screenWidth < 640
                      ? "bg-transparent border-transparent"
                      : "bg-teal-gradient"
                  } 
                  p-1 text-[2.5rem] rotate-180 lg:text-[3rem]`}
            onClick={() => prevBtn()}
          ></Icon>
          <p className="sm:text-[1.1rem] lg:text-[1.3rem]">
            Image {firstImage + 1} of {selectedProject.images.length}
          </p>
          <Icon
            icon="maki:arrow"
            className={`
                  ${
                    isMouseHovering && screenWidth < 640
                      ? "bg-transparent border-transparent"
                      : "bg-teal-gradient"
                  } 
                  rounded-md  border p-1 text-[2.5rem] lg:text-[3rem]`}
            onClick={() => nextBtn()}
          ></Icon>
        </div>
      </div>
    </>
  )

  const handleMouseEnter = () => {
    setIsMouseHovering(true)
  }

  const handleMouseLeave = () => {
    setIsMouseHovering(false)
    setObjPositionLR("50%")
    setObjPositionTB("50%")
  }

  const revertTitleAnimState = () => {
    setIsTitleAnimActive((prevState) => {
      return !prevState
    })
  }

  return (
    <div
      className={`flex flex-col  w-full text-white items-center ${
        isModalOpen && "filter brightness-[40%]"
      }`}
    >
      <div className="bg-black z-40 grow w-full font-oswald flex flex-col">
        <div className="relative ">
          <div className="">
            <h1 className="pl-2 text-[1.4rem] h-[40px]">
              {selectedProject.name}
            </h1>
          </div>
          {/* <Link to="/projects">
            <FontAwesomeIcon
              className="absolute right-3 text-white text-[1.5rem] top-[6px] sm:top-[6px] sm:right-[19px] sm:text-[1.5rem]"
              onClick={() => setViewProjectDetails(false)}
              icon={faRotateLeft}
            />
          </Link> */}
        </div>
        <div className={`lg:flex-row-reverse flex flex-col grow`}>
          {/* icons */}

          <div
            className={` flex flex-wrap mt-4  justify-evenly xs:mt-3 xs:h-[140px] sm:h-[100px] sm:justify-between lg:${imgHeightClass} lg:w-[32%] lg:grow lg:h-full lg:self-center lg:justify-center lg:items-center xl:justify-center xl:mt-[100px]`}
          >
            <div className="flex flex-wrap justify-center items-end relative sm:w-[60%] lg:flex-col lg:items-center lg:border lg:mr-4 lg:rounded-[100%] lg:h-[320px] lg:w-[320px] xl:w-[400px] xl:h-[400px]">
              <div className="w-[86%] flex flex-wrap justify-center sm:w-[65%] sm:flex sm:flex-wrap lg:w-[80%]">
                {selectedProject &&
                  selectedProject?.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap w-[18.5%] my-2 mx-2 xs:my-1.5 justify-center"
                    >
                      <Icon
                        icon={icon.icon}
                        className={`${
                          icon.title === selectedIcon.title && "border"
                        } hover:border hover:cursor rounded-sm text-[2.3rem] p-[1.5px] md:text-[2.7rem] md:p-[3px] lg:text-[3.2rem] xl:text-[3.4rem] `}
                        onMouseOver={() => showIconTitle(icon)}
                        // onMouseOut={() => setDisplayModalIcon(false)}
                        // onMouseLeave={() => setStopTitleAnim(false)}
                      ></Icon>
                    </div>
                  ))}
              </div>

              <>
                <div className="my-2 sm:my-0 sm:w-[30%] sm:flex sm:h-full sm:items-center sm:justify-end lg:h-[80px] lg:justify-center lg:w-[45%] xl:mt-8">
                  <span className="text-white my-2 text-[1.3rem] w-full text-center sm:flex sm:flex-col sm:gap-1 sm:w-[120px] lg:text-[1.6rem] lg:w-auto xl:text-[1.8rem] ">
                    Built with:{" "}
                    {displayModalIcon && (
                      <span
                        className={`${
                          isTitleAnimActive && "animate-fade-in"
                        } bg-teal-gradient px-[6px] rounded-lg  sm:w-auto`}
                        onAnimationEnd={revertTitleAnimState}
                      >
                        {selectedIcon.title}
                      </span>
                    )}
                  </span>
                </div>
              </>
            </div>
            <div className="hidden sm:flex">{prevNextBtns}</div>
          </div>

          {/* images */}
          <div
            className={`w-full ${
              screenHeight >= 650 ? "mt-4 grow flex flex-col" : ""
            } lg:w-[68%] lg:items-center lg:flex lg:flex-col lg:justify-center xl:w-[55%]`}
          >
            <div
              className={`flex justify-center md:justify-evenly   ${
                screenHeight < 650
                  ? "h-[22.6rem] items-center sm:h-[25.5rem]"
                  : "min-h-[330px] grow sm:min-h-[370px] md:min-h-[400px] md:flex-col md:items-center"
              }`}
            >
              {/* took off parentHeightClass */}
              <div
                ref={imgParentDiv}
                className={` ${
                  screenHeight < 650 ? "mb-10 sm:mb-12" : "my-4 xs:my-2"
                } flex relative flex-col justify-center  items-center xs:gap-1
                   
                rounded-md sm:my-0 sm:gap-1 md:mb-4 md:mt-1 `}
              >
                <img
                  onMouseMove={(e) => handleMouseMove(e)}
                  onMouseOver={handleMouseEnter}
                  onMouseOut={handleMouseLeave}
                  ref={imgTag}
                  style={{
                    objectPosition: `${objPositionLR} ${objPositionTB}`,
                  }}
                  className={`${imgHeightClass}  ${imgWidthClass} z-50 object-cover border  rounded-md  duration-500 hover:scale-[130%] hover:translate-y-[10%] hover:sm:translate-y-[7%] hover:md:translate-y-[20px] hover:lg:translate-y-[10px] hover:xl:translate-y-[30px]
                
                ${
                  closingOrOpening
                    ? animationClassActive
                      ? ""
                      : "animate-image-opacity-close"
                    : animationClassActive
                    ? ""
                    : "animate-image-opacity-open"
                }  `}
                  src={selectedProject.images[firstImage]}
                ></img>
                {screenWidth < 640 && prevNextBtns}
              </div>
            </div>
            {/* Footer Div */}
            {/* {screenHeight >= 650 && screenWidth < 1024 && (
              <div className="h-16 w-full"></div>
            )} */}
{/* 
            {((screenHeight >= 650 && screenWidth < 640) ||
              (screenWidth >= 640 &&
                screenWidth < 1024 &&
                screenHeight >= 650 &&
                !isMouseHovering)) && <FooterIcons />} */}
          </div>
        </div>
        {/* {screenHeight >= 650 && screenWidth > 1024 && (
          <div className="h-16 w-full"></div>
        )} */}

        {/* {(screenHeight < 650 || screenWidth >= 1024 && !isMouseHovering) && <FooterIcons />} */}
      </div>
    </div>
  )
}
