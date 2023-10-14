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

  const skills: Skill[] = [
    {
      title: "React",
      icon: "devicon-react-original colored",
    },
    {
      title: "TypeScript",
      icon: "devicon-typescript-plain colored",
    },
    {
      title: "JavaScript",
      icon: "devicon-javascript-plain colored",
    },
    {
      title: "TailwindCSS",
      icon: "devicon-tailwindcss-plain colored",
    },
    {
      title: "NodeJS",
      icon: "devicon-nodejs-plain colored",
    },
    {
      title: "Handlebars.js",
      icon: "devicon-handlebars-plain",
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
  ]

  const [displayIconTitle, setDisplayIconTitle] = useState(false)

  const [iconIndex, setIconIndex] = useState<number>(0)

  const iconTitle = (index: number) => {
    setIconIndex(index)
    setDisplayIconTitle(true)
  }

  return (
    <>
      <div
        className={`w-full pt-4 bg-black min-h-screen flex text-white ${
          isModalOpen && "filter brightness-[40%]"
        }`}
        style={{ height: componentHeight }}
      >
        <div>
          <h2 className="text-[3rem] ml-4">Skills</h2>
          <div className="flex px-2 flex-wrap">
            {skills.map((skill, index) => (
              <>
                <div key={index} className="flex flex-col">
                  <div
                    onMouseOver={() => iconTitle(index)}
                    onMouseOut={() => setDisplayIconTitle(false)}
                    className="px-1"
                  >
                    <i
                      className={`${skill.icon} hover:border text-[1.5rem] p-[1px] relative `}
                    ></i>
                  </div>

                  {displayIconTitle && (
                    <p className="absolute top-[9rem]">
                      {index === iconIndex ? skill.title : ""}
                    </p>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
