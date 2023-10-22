import { ProjectsContext } from "../../context/ProjectsContext"
import { useContext, useState, useEffect } from "react"
import type { Project } from "../../types/project-types/projectTypes"
import { Icon } from "@iconify/react"
import { Icon as IconType } from "../../types/project-types/projectTypes"

type ProjectDetailsProps = {
  projectIndex: number
}

export default function ProjectDetails({ projectIndex }: ProjectDetailsProps) {
  const { projects, setViewProjectDetails } = useContext(ProjectsContext)

  const selectedProject: Project = projects[projectIndex]

  const [animationClassActive, setAnimationClassActive] =
    useState<boolean>(false)

  const [selectedIcon, setSelectedIcon] = useState<IconType>({
    title: selectedProject.icons[0].title,
    icon: selectedProject.icons[0].icon,
  })
  const [displayModalIcon, setDisplayModalIcon] = useState<boolean>(true)
  const [firstImage, setFirstImage] = useState<number>(0)

  const imagesLength: number = selectedProject.images.length - 1

  const showIconTitle = (icon: IconType) => {
    setSelectedIcon(icon)
    setDisplayModalIcon(true)
  }

  const [closingOrOpening, setClosingOrOpening] = useState<boolean>(false)

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

      // setTimeout(() => {
      setAnimationClassActive((prevState) => {
        return !prevState
      })
      // }, 1)
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

    // setTimeout(() => {
    setAnimationClassActive((prevState) => {
      return !prevState
    })
    // }, 1)
  }

  useEffect(() => {
    console.log("animClassActive", animationClassActive)
    console.log("closingOrOpen", closingOrOpening)
  }, [animationClassActive, closingOrOpening])

  return (
    <div className="flex justify-center text-white items-center">
      <div className="absolute top-[5rem] bg-black rounded-md z-50 w-[280px] h-[540px] border font-oswald">
        <div className="bg-teal-gradient rounded-md">
          <h1 className="pl-2 text-[1.4rem] h-[40px]">
            {selectedProject.name}
          </h1>
        </div>
        <button
          className="absolute right-3 top-[-2px] text-[1.4rem]"
          onClick={() => setViewProjectDetails(false)}
        >
          x
        </button>

        {/* icons */}

        <div className="flex flex-wrap mt-4 justify-evenly">
          <div className="flex flex-wrap justify-center items-end relative ">
            {selectedProject.icons.map((icon, index) => (
              <div key={index} className="flex flex-wrap w-[18.5%] my-2 mx-2 justify-center">
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

            <>
              <span className="text-white my-2 text-[1.3rem] w-full text-center">
                Built with:{" "}
                {displayModalIcon && (
                  <span className="bg-teal-gradient px-[6px] rounded-lg">
                    {selectedIcon.title}
                  </span>
                )}
              </span>
            </>
          </div>
        </div>

        {/* images */}
        <div className="absolute bottom-4">
          <div className="flex w-full mx-auto justify-center overflow-hidden">
            {/* {selectedProject.images.slice(firstImage).map((image) => ( */}
            <div className="h-[14.25rem] my-4  flex justify-center w-[280px] rounded-md ">
              <img
                className={`h-56 max-w-none w-[200px] border-2 rounded-md  object-cover ${
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
          <div className="flex w-full items-center justify-evenly">
            <Icon
              icon="maki:arrow"
              className="border rounded-md bg-teal-gradient p-1 text-[2.5rem] rotate-180"
              onClick={() => prevBtn()}
            ></Icon>
            <p className="">
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
  )
}
