import { ProjectsContext } from "../../context/ProjectsContext"
import { useContext, useState, useEffect, useRef } from "react"
import type { Project } from "../../types/project-types/projectTypes"
import { Icon } from "@iconify/react"
import { Icon as IconType } from "../../types/project-types/projectTypes"
import { useParams, useNavigate, Link } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group"

export default function ProjectDetails() {
  const { projects, setViewProjectDetails, projectIndex } =
    useContext(ProjectsContext)

  const { screenWidth, screenHeight } = useContext(GlobalContext)
  // const navigate = useNavigate()

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
    setSelectedIcon(icon)
    setDisplayModalIcon(true)
  }

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

  const imgDiv = useRef(null)
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
      if (imgDiv.current) {
        setImgXCoord(
          Math.round(
            e.clientX - imgDiv.current.getBoundingClientRect().left + 1
          )
        )

        setImgYCoord(
          Math.round(e.clientY - imgDiv.current.getBoundingClientRect().top + 1)
        )
      }
    }
  }

  useEffect(() => {
    if (screenWidth < 475) {
      setImgWidth(300)
      setImgWidthClass("w-[300px]")
      setImgHeight(224)
      setImgHeightClass("h-[224px]")
    }
    if (screenWidth >= 475 && screenWidth < 640) {
      setImgWidth(400)
      setImgWidthClass("w-[400px]")
      setImgHeight(270)
      setImgHeightClass("h-[270px]")
    }
    if (screenWidth >= 640 && screenWidth < 768) {
      setImgWidth(500)
      setImgWidthClass("w-[500px]")
      setImgHeight(300)
      setImgHeightClass("h-[300px]")
    }
    if (screenWidth >= 768 && screenWidth < 1024) {
      setImgWidth(600)
      setImgWidthClass("w-[600px]")
      setImgHeight(320)
      setImgHeightClass("h-[320px]")
    }
    if (screenWidth >= 1024 && screenWidth < 1280) {
      setImgWidth(800)
      setImgWidthClass("w-[800px]")
      setImgHeight(340)
      setImgHeightClass("h-[340px]")
    }
    // if (screenWidth >= 1280 && screenWidth < 1536) {
    // }
    // if (screenWidth >= 1536) {
    // }
  }, [screenWidth])

  useEffect(() => {
    const objWidthPercentage = Math.round((imgXCoord / imgWidth) * 100)
    setObjPositionLR(`${objWidthPercentage.toString()}%`)
  }, [imgXCoord])
  useEffect(() => {
    const objHeightPercentage = Math.round((imgYCoord / imgHeight) * 100)
    setObjPositionTB(`${objHeightPercentage.toString()}%`)
  }, [imgYCoord])

  const handleMouseEnter = () => {
    setIsMouseHovering(true)
  }

  const handleMouseLeave = () => {
    setIsMouseHovering(false)
    // setObjPositionOne("50%")
  }

  return (
    <div
      className={`${
        screenHeight < 650 ? "h-[602px]" : "min-h-[calc(100vh-48px)"
      } flex flex-col w-full text-white items-center`}
    >
      <div className="bg-black z-40 w-full font-oswald">
        <div className="bg-teal-gradient">
          <h1 className="pl-2 text-[1.4rem] h-[40px]">
            {selectedProject.name}
          </h1>
        </div>
        <Link to="/projects">
          <button
            className="absolute right-3 text-[1.4rem] top-[-2px] sm:top-[41.5px] sm:right-[26px] sm:text-[1.8rem]"
            onClick={() => setViewProjectDetails(false)}
          >
            x
          </button>
        </Link>

        {/* icons */}

        <div className="flex flex-wrap mt-4 justify-evenly">
          <div className="flex flex-wrap justify-center items-end relative">
            <div className="w-[86%] flex flex-wrap justify-center sm:w-[65%] sm:flex sm:flex-wrap">
              {selectedProject &&
                selectedProject?.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap w-[18.5%] my-2 mx-2 justify-center"
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
              <div className="my-2 sm:my-0 sm:w-[30%] sm:flex sm:h-full sm:items-center sm:justify-end">
                <span className="text-white my-2 text-[1.3rem] w-full text-center sm:flex sm:flex-col sm:gap-1 sm:w-[120px]">
                  Built with:{" "}
                  {displayModalIcon && (
                    <span className="bg-teal-gradient px-[6px] rounded-lg sm:w-auto">
                      {selectedIcon.title}
                    </span>
                  )}
                </span>
              </div>
            </>
          </div>
        </div>

        {/* images */}
        <div className="w-full">
          <div className="flex justify-center">
            <div
              className={` my-4 ${
                screenHeight >= 650
                  ? "h-[47vh] sm:h-[47vh] lg:h-[52vh]"
                  : "h-[280px] sm:h-[300px]"
              } items-center flex justify-center w-[95%] rounded-md `}
            >
              <img
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseOver={handleMouseEnter}
                onMouseOut={handleMouseLeave}
                ref={imgDiv}
                style={{ objectPosition: `${objPositionLR} ${objPositionTB}` }}
                className={`${imgHeightClass}  ${imgWidthClass} max-w-none object-cover border-2 rounded-md 
                
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
            </div>
          </div>
          <div
            className={`flex w-full items-center justify-evenly ${
              screenHeight >= 650 ? "fixed bottom-5" : "mt-6 sm:mt-1"
            } `}
          >
            <div className="flex sm:w-[205px] gap-6 items-center">
              <Icon
                icon="maki:arrow"
                className="border rounded-md bg-teal-gradient p-1 text-[2.5rem] rotate-180"
                onClick={() => prevBtn()}
              ></Icon>
              <p className="sm:text-[1.1rem]">
                Image {firstImage + 1} of {selectedProject.images.length}
              </p>
              <Icon
                icon="maki:arrow"
                className="rounded-md bg-teal-gradient border p-1 text-[2.5rem]"
                onClick={() => nextBtn()}
              ></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
