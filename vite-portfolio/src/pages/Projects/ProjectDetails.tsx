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
    title: "",
    icon: "",
  })
  const [displayModalIcon, setDisplayModalIcon] = useState<boolean>(false)
  const [firstImage, setFirstImage] = useState<number>(0)
  // const [lastImage, setLastImage] = useState<number>((selectedProject.images.length-1))
  const imagesLength: number = selectedProject.images.length - 1

  const showIconTitle = (icon: IconType) => {
    setSelectedIcon(icon)
    setDisplayModalIcon(true)
  }

  const [closingOrOpening, setClosingOrOpening] = useState<boolean>(false)

  console.log("animationClassAct", animationClassActive)

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

      setTimeout(() => {
        setAnimationClassActive((prevState) => {
          return !prevState
        })
      }, 1)
    }, 500)
    setTimeout(() => {
      setAnimationClassActive((prevState) => {
        return !prevState
      })
    }, 1)
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

      // setClosingOrOpening(true)
      setTimeout(() => {
        setAnimationClassActive((prevState) => {
          return !prevState
        })
      }, 1)
    }, 500)

    setTimeout(() => {
      setAnimationClassActive((prevState) => {
        return !prevState
      })
    }, 1)
  }

  useEffect(()=>{
    console.log("animClassActive", animationClassActive)
    console.log("closingOrOpen", closingOrOpening)

  },[animationClassActive, closingOrOpening])

  return (
    <div className="flex justify-center text-white items-center">
      <div className="absolute top-[5rem] bg-black rounded-md z-50 w-[250px] h-[500px] border font-oswald">
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
        <div className="flex flex-wrap justify-start mt-2">
          {selectedProject.icons.map((icon) => (
            <div className="flex flex-wrap w-[18.5%] my-2 mx-2 justify-center">
              <Icon
                icon={icon.icon}
                onMouseOver={() => showIconTitle(icon)}
                onMouseOut={() => setDisplayModalIcon(false)}
                className={`hover:border rounded-sm text-[2.3rem] p-[1.5px] md:text-[2.7rem] md:p-[3px] `}
              ></Icon>
            </div>
          ))}
          {displayModalIcon && (
            <span className="text-white">{selectedIcon.title}</span>
          )}
          <div className="flex w-full overflow-hidden">
            {selectedProject.images.slice(firstImage).map((image) => (
              <div className="h-[14.25rem] mx-5 w-[250px] rounded-md ">
                <img
                  // style={{ maxWidth: "none" }}
                  className={`h-56 max-w-none w-[200px] border-2 rounded-md  object-cover ${
                    closingOrOpening
                      ? animationClassActive
                        ? ""
                        : "animate-image-opacity-close"
                      : animationClassActive
                      ? ""
                      : "animate-image-opacity-open"
                  }  `}
                  src={image}
                ></img>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-evenly">
            <button onClick={() => prevBtn()} className="text-white border">
              prev
            </button>
            <button onClick={() => nextBtn()} className="text-white border">
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
