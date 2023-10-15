import "../animation.css"
import { useContext, useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   IconDefinition,
//   faJsSquare,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons"

import { GlobalContext } from "../context/GlobalContext"

export default function AboutMe() {
  const { componentHeight, screenWidth, isModalOpen } =
    useContext(GlobalContext)

  type Skill = {
    title: string
    icon: string
  }

  const languagesAndTools: Skill[] = [
    {
      title: "TypeScript",
      icon: "devicon-typescript-plain colored",
    },
    {
      title: "JavaScript",
      icon: "devicon-javascript-plain colored",
    },

    {
      title: "NodeJS",
      icon: "devicon-nodejs-plain colored",
    },
    {
      title: "JQuery",
      icon: "devicon-jquery-plain colored",
    },

    {
      title: "CSS3",
      icon: "devicon-css3-plain colored",
    },
    {
      title: "HTML5",
      icon: "devicon-html5-plain colored",
    },
    {
      title: "Github",
      icon: "devicon-github-original",
    },
  ]

  const librariesAndFrameworks: Skill[] = [
    {
      title: "React.js",
      icon: "devicon-react-original colored",
    },
    {
      title: "TailwindCSS",
      icon: "devicon-tailwindcss-plain colored",
    },
    {
      title: "Handlebars.js",
      icon: "devicon-handlebars-plain",
    },
  ]

  const [displayIconTitle, setDisplayIconTitle] = useState(false)

  // const [iconIndex, setIconIndex] = useState<number>(0)

  const [displayedIcon, setDisplayedIcon] = useState("")

  const iconTitle = (displayed: string) => {
    setDisplayedIcon(displayed)
    // setIconIndex(index)
    setDisplayIconTitle(true)
  }

  const containsDisplayedIcon = (skills: Skill[]) => {
    const hoveredSkill = skills.find((skill) => skill.title === displayedIcon)

    if (hoveredSkill) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <div
        className={`w-full pl-2 pt-4 bg-black font-oswald min-h-screen flex text-white ${
          isModalOpen && "filter brightness-[40%]"
        }`}
        style={{ height: componentHeight }}
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-[3rem] uppercase">Skills</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[1rem] uppercase">Languages and Tools </h3>
              {displayIconTitle && containsDisplayedIcon(languagesAndTools) && (
                <span className="pr-[.8rem] text-[1.2rem]">
                  {displayedIcon}
                </span>
              )}
            </div>

            <div className="flex pr-2 flex-wrap">
              {languagesAndTools.map((tool, langIndex) => (
                <>
                  <div key={langIndex} className="flex flex-col relative">
                    <div className="px-1">
                      <i
                        onMouseOver={() => iconTitle(tool.title)}
                        onMouseOut={() => setDisplayIconTitle(false)}
                        className={`${tool.icon} hover:border rounded-sm text-[2.3rem] p-[1px] relative `}
                      ></i>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[1rem] uppercase">
                  Libraries and Frameworks{" "}
                </h3>
                {displayIconTitle &&
                  containsDisplayedIcon(librariesAndFrameworks) && (
                    <span className="pl-4 text-[1.2rem]">{displayedIcon}</span>
                  )}
              </div>
              <div className="flex">
                {librariesAndFrameworks.map((library, libIndex) => (
                  <>
                    <div key={libIndex} className="flex flex-col relative">
                      <div className="px-1 flex ">
                        <i
                          onMouseOver={() => iconTitle(library.title)}
                          onMouseOut={() => setDisplayIconTitle(false)}
                          className={`${library.icon} hover:border rounded-sm text-[2.3rem] p-[1px] relative`}
                        ></i>
                      </div>

                      {/* {displayIconTitle && (
                        <p className="absolute top-[2.5rem]">
                          {displayedIcon === library.title && library.title}
                        </p>
                      )} */}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
