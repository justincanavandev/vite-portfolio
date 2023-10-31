import { ProjectsContext } from "../../context/ProjectsContext"
import { useContext, useState, useEffect, useRef } from "react"
import type { Project } from "../../types/project-types/projectTypes"
import { Icon } from "@iconify/react"
import { Icon as IconType } from "../../types/project-types/projectTypes"
import { useParams, useNavigate, Link } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import "../../projects.css"
import FooterIcons from "../../components/FooterIcons"

export default function ProjectDetails() {
  const { projects, setViewProjectDetails } = useContext(ProjectsContext)

  const { screenWidth, screenHeight, isModalOpen } = useContext(GlobalContext)
  // const navigate = useNavigate()
  const imgParentDiv = useRef(null)

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
    console.log("hello")

    setIsTitleAnimActive(true)
    setSelectedIcon(icon)
    setDisplayModalIcon(true)
    //   setTimeout(()=>{
    //   setIsTitleAnimActive((prevState) => {
    //     return !prevState
    //   })
    // }, 300)
  }

  useEffect(() => {
    console.log("animationClassActive", animationClassActive)
  }, [animationClassActive])

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

  const imgTag = useRef(null)
  const [isMouseHovering, setIsMouseHovering] = useState<boolean>(false)
  const [imgXCoord, setImgXCoord] = useState<number>(0)
  const [imgYCoord, setImgYCoord] = useState<number>(0)
  const [objPositionLR, setObjPositionLR] = useState<string>("50%")
  const [objPositionTB, setObjPositionTB] = useState<string>("0%")
  const [imgWidth, setImgWidth] = useState<number>(0)
  const [imgWidthClass, setImgWidthClass] = useState<string>("")
  const [imgHeight, setImgHeight] = useState<number>(0)
  const [imgHeightClass, setImgHeightClass] = useState<string>("")
  const [displayIcons, setDisplayIcons] = useState<boolean>(true)

  const handleMouseMove = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (isMouseHovering) {
      if (imgTag.current) {
        setImgXCoord(
          Math.round(
            // e.clientX - imgTag.current.getBoundingClientRect().left + 1
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
  }, [imgXCoord])

  useEffect(() => {
    let objHeightPercentage
    if (isMouseHovering) {
      objHeightPercentage = Math.round((imgYCoord / imgHeight) * 100 - 15)
    } else {
      objHeightPercentage = Math.round((imgYCoord / imgHeight) * 100)
    }
    setObjPositionTB(`${objHeightPercentage.toString()}%`)
  }, [imgYCoord])

  useEffect(() => {
    console.log("imgXCoord", imgXCoord)
    console.log("imgYCoord", imgYCoord)
    console.log("objLR", objPositionLR)
    console.log("objTB", objPositionTB)
    console.log("isMouseHovering", isMouseHovering)
  }, [imgXCoord, imgYCoord, objPositionLR, objPositionTB, isMouseHovering])

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
    // if (screenWidth >= 1280 && screenWidth < 1536) {
    // }
    // if (screenWidth >= 1536) {
    // }
  }, [screenWidth])

  const prevNextBtns = (
    <>
      <div
        className={`flex w-full items-center justify-evenly md:items-start md:mt-2 lg:h-[40px] lg:absolute lg:top-[-65px] ${
          screenHeight >= 650
            ? "mt-6 xs:mt-4 md:mt-0"
            : // "fixed bottom-5"
              "mt-6 sm:mt-1"
        } `}
      >
        <div
          className={`${
            isMouseHovering && (screenWidth < 768 || screenWidth>=1024) && "text-transparent "
          } flex sm:w-[205px] gap-6 items-center md:gap-4`}
        >
          <Icon
            icon="maki:arrow"
            className={`border rounded-md 
                  ${
                    isMouseHovering && (screenWidth < 768 || screenWidth>=1024)
                      ? "bg-transparent border-transparent"
                      : "bg-teal-gradient"
                  } 
                  p-1 text-[2.5rem] rotate-180`}
            onClick={() => prevBtn()}
          ></Icon>
          <p className="sm:text-[1.1rem]">
            Image {firstImage + 1} of {selectedProject.images.length}
          </p>
          <Icon
            icon="maki:arrow"
            className={`
                  ${
                    isMouseHovering && (screenWidth < 768 || screenWidth>=1024)
                      ? "bg-transparent border-transparent"
                      : "bg-teal-gradient"
                  } 
                  rounded-md  border p-1 text-[2.5rem]`}
            onClick={() => nextBtn()}
          ></Icon>
        </div>
      </div>
    </>
  )

  const handleMouseEnter = () => {
    setIsMouseHovering(true)
  }

  const [parentWidthClass, setParentWidthClass] = useState<string>(
    "w-[300px] xs:w-[360px] sm:w-[490px] md:w-[570px] lg:w-[620px]"
  )
  const [parentHeightClass, setParentHeightClass] = useState<string>(
    "h-[290px] xs:h-[330px] sm:h-[370px] md:h-[410px] lg:h-[485px]"
  )

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
      className={`${
        screenHeight < 650 ? "h-[602px]" : "min-h-[calc(100vh-48px)]"
      } flex flex-col w-full text-white items-center ${
        isModalOpen && "filter brightness-[40%]"
      }`}
    >
      <div className="bg-black z-40 w-full font-oswald">
        <div className="relative">
          <div className="bg-teal-gradient">
            <h1 className="pl-2 text-[1.4rem] h-[40px]">
              {selectedProject.name}
            </h1>
          </div>
          <Link to="/projects">
            <button
              className="absolute right-3 text-[1.5rem] top-[-2.7px] sm:top-[-5px] sm:right-[26px] sm:text-[1.8rem]"
              onClick={() => setViewProjectDetails(false)}
            >
              x
            </button>
          </Link>
        </div>
        <div
          className={`lg:flex lg:flex-row-reverse ${
            screenHeight >= 650 ? "lg:h-[calc(100vh-108px)]" : "h-[562px]"
          }`}
        >
          {/* icons */}

          <div
            className={` flex flex-wrap mt-4 justify-evenly xs:mt-3 xs:h-[140px] sm:h-[100px] md:justify-between lg:${imgHeightClass} lg:w-[32%] lg:h-full lg:self-center lg:justify-center lg:items-center`}
          >
            <div className="flex flex-wrap justify-center items-end relative md:w-[60%] lg:flex-col lg:items-center lg:border lg:mr-4 lg:rounded-[100%] lg:h-[300px] lg:w-[300px]">
              <div className="w-[86%] flex flex-wrap justify-center sm:w-[65%] sm:flex sm:flex-wrap lg:w-[80%]">
                {selectedProject &&
                  selectedProject?.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap w-[18.5%] my-2 mx-2 xs:my-1.5 justify-center"
                    >
                      <Icon
                        icon={icon.icon}
                        onMouseOver={() => showIconTitle(icon)}
                        // onMouseOut={() => setDisplayModalIcon(false)}
                        className={`${
                          icon.title === selectedIcon.title && "border"
                        } hover:border hover:cursor rounded-sm text-[2.3rem] p-[1.5px] md:text-[2.7rem] md:p-[3px] `}
                      ></Icon>
                    </div>
                  ))}
              </div>

              <>
                <div className="my-2 sm:my-0 sm:w-[30%] sm:flex sm:h-full sm:items-center sm:justify-end lg:h-[80px]">
                  <span className="text-white my-2 text-[1.3rem] w-full text-center sm:flex sm:flex-col sm:gap-1 sm:w-[120px]">
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
            <div className="hidden md:flex lg:hidden">{prevNextBtns}</div>
          </div>

          {/* images */}
          <div
            className={`w-full ${
              screenHeight >= 650 ? "mt-4" : ""
            } lg:w-[68%] lg:flex-1 lg:items-center lg:flex lg:flex-col lg:justify-center`}
          >
            <div
              className={`flex justify-center md:justify-evenly   ${
                screenHeight < 650
                  ? "h-[22.6rem] sm:h-[25.5rem]"
                  : "xs:min-h-[330px] md:min-h-[375px] md:flex-col md:items-center"
              }`}
            >
              {/* took off parentHeightClass */}
              <div
                ref={imgParentDiv}
                className={` my-4 flex flex-col justify-center xs:my-2 items-center xs:gap-1
                   
                rounded-md sm:my-0 sm:gap-1 md:mb-4 md:mt-1 lg:relative   `}
              >
                <img
                  onMouseMove={(e) => handleMouseMove(e)}
                  onMouseOver={handleMouseEnter}
                  onMouseOut={handleMouseLeave}
                  ref={imgTag}
                  style={{
                    objectPosition: `${objPositionLR} ${objPositionTB}`,
                  }}
                  className={`${imgHeightClass}  ${imgWidthClass} z-50 object-cover border  rounded-md  duration-500 hover:scale-[130%] hover:translate-y-[30px] hover:sm:translate-y-[50px] hover:md:translate-y-[28px]
                hover:lg:translate-y-[-15px]
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
                {/* prev/next Btns */}
                {screenWidth < 768 || (screenWidth >= 1024 && prevNextBtns)}
                {screenHeight >= 650 &&
                  !isMouseHovering &&
                  screenWidth < 768 && <FooterIcons />}
              </div>
            </div>
            {(screenHeight < 650 ||
              (screenWidth >= 768 &&
                screenWidth < 1024 &&
                !isMouseHovering)) && <FooterIcons />}
          </div>
        </div>
        {(screenHeight < 650 || screenWidth >= 1024 ) && (
          <FooterIcons />
        )}
      </div>
    </div>
  )
}
