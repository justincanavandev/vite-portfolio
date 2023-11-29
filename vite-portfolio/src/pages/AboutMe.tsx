import "../animation.css"
import { useContext, useState } from "react"
import "../about-me.css"
import type { Skill } from "../types/about-me-types.ts/aboutMeTypes"
import { Icon } from "@iconify/react"
import FooterIcons from "../components/FooterIcons"

import { GlobalContext } from "../context/GlobalContext"

export default function AboutMe() {
  const { screenWidth, isModalOpen, openOrClose, screenHeight } =
    useContext(GlobalContext)

  const languagesAndTools: Skill[] = [
    {
      title: "TypeScript",
      icon: "devicon:typescript",
    },
    {
      title: "JavaScript",
      icon: "devicon:javascript",
    },

    {
      title: "NodeJS",
      icon: "devicon:nodejs",
    },

    {
      title: "CSS3",
      icon: "devicon:css3",
    },
    {
      title: "Python3",
      icon: "devicon:python",
    },
    {
      title: "JQuery",
      icon: "devicon:jquery",
    },
    {
      title: "HTML5",
      icon: "devicon:html5",
    },
    {
      title: "Babel",
      icon: "devicon:babel",
    },
    {
      title: "Github",
      icon: "bi:github",
    },
  ]

  const librariesAndFrameworks: Skill[] = [
    {
      title: "React.js",
      icon: "logos:react",
    },
    {
      title: "TailwindCSS",
      icon: "devicon:tailwindcss",
    },
    {
      title: "Express.js",
      icon: "simple-icons:express",
    },
    {
      title: "React Query",
      icon: "logos:react-query-icon",
    },
    {
      title: "Handlebars.js",
      icon: "vscode-icons:file-type-handlebars",
    },
  ]

  const [displayIconTitle, setDisplayIconTitle] = useState<boolean>(false)

  const [displayedIcon, setDisplayedIcon] = useState<string>("")
  // const [overflowClass, setOverflowClass] = useState<string>("overflow-hidden")
  // const [overflowClass, setOverflowClass] = useState<string>("")
  const [openJobDetails, setOpenJobDetails] = useState<boolean>(false)

  // const handleOverflow = () => {
  //   setTimeout(() => {
  //     setOverflowClass("")
  //   }, 2000)
  // }

  const iconTitle = (displayed: string) => {
    setDisplayedIcon(displayed)
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

  // const iconFadeIn = (index: number) => {
  //   console.log("index", index)

  //   if (index === 0) {
  //     return "icon-div"
  //   } else {
  //     return setTimeout(() => {
  //       console.log('hello')
  //      "icon-div";
  //     }, (index * 100))
  //   }
  // }

  const displayIcons = () => {
    if (screenWidth < 475) {
      return "display-icons"
    }
    if (screenWidth >= 475 && screenWidth < 640) {
      return "display-icons-xs"
    }
    if (screenWidth >= 640 && screenWidth < 768) {
      return "display-icons-sm"
    }
    if (screenWidth >= 768 && screenWidth < 1024) {
      return "display-icons-md"
    }
    if (screenWidth >= 1024 && screenWidth < 1280) {
      return "display-icons-lg"
    }
    if (screenWidth >= 1280 && screenWidth < 1536) {
      return "display-icons-xl"
    }
    if (screenWidth >= 1536) {
      return "display-icons-2xl"
    }

    return ""
  }

  const displayPage = () => {
    if (screenWidth < 475) {
      return "display-page"
    }
    if (screenWidth >= 475 && screenWidth < 640) {
      return "display-page-xs"
    }
    if (screenWidth >= 640 && screenWidth < 768) {
      return "display-page-sm"
    }
    if (screenWidth >= 768 && screenWidth < 1024) {
      return "display-page-md"
    }
    if (screenWidth >= 1024 && screenWidth < 1280) {
      return "display-page-lg"
    }
    if (screenWidth >= 1280 && screenWidth < 1536) {
      return "display-page-xl"
    }
    if (screenWidth >= 1536) {
      return "display-page-2xl"
    }

    return ""
  }

  return (
    <>
      <div
        className={`w-full bg-black font-oswald flex flex-col text-white  ${
          screenHeight < 650 ? "h-[602px]" : "min-h-[calc(100vh-48px)]"
        }            ${
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
        }`}
      >
        <div className={`flex flex-col gap-10 overflow-y-scroll z-10 grow mb-4`}>
          <div className="">
            <h2 className="text-[2.5rem] pl-2 sm:text-[3rem] uppercase">
              About Me
            </h2>

            <p className="px-5">
              {/* As a freelance musician for over a decade, I have always been deeply committed to the art of crafting immersive experiences!  */}
              As a freelance musician for over a decade, my commitment to the art of crafting immersive experiences has been my driving motivation.
            </p>
          </div>
          {/* <div className="flex flex-col gap-2"> */}
            {/* <div className="grow pl-2"> */}
            <div className="px-2">
              <h2 className=" uppercase text-[1.7rem]">Skills</h2>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex justify-between items-center text-[16px] xs:text-[22px] sm:text-[24px] md:text-[26px]">
                  <h3 className="uppercase">Languages and Tools </h3>
                  {displayIconTitle &&
                    containsDisplayedIcon(languagesAndTools) && (
                      <span className=" mr-[.8rem]">{displayedIcon}</span>
                    )}
                </div>

                <div className="flex pr-2 flex-wrap pt-1 opacity-fade-in relative">
                  {languagesAndTools.map((tool, langIndex) => (
                    <>
                      <div key={langIndex} className="flex flex-col relative">
                        <div className="px-1 mb-2.5">
                          <Icon
                            icon={tool.icon}
                            onMouseOver={() => iconTitle(tool.title)}
                            onMouseOut={() => setDisplayIconTitle(false)}
                            className={` relative hover:border p-[1.5px] rounded-md text-[2.3rem] md:text-[2.7rem]  md:p-[3px] `}
                          ></Icon>
                        </div>
                      </div>
                    </>
                  ))}
                  <div
                    className={`absolute inset-0 w-full bg-black ${displayIcons()}`}
                  ></div>
                </div>
              </div>
              <div className="flex-col">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center text-[16px] xs:text-[22px] sm:text-[24px] md:text-[26px]">
                    <h3 className=" uppercase">Libraries and Frameworks </h3>
                    {displayIconTitle &&
                      containsDisplayedIcon(librariesAndFrameworks) && (
                        <span className="pr-[.8rem]">{displayedIcon}</span>
                      )}
                  </div>
                  <div className="flex opacity-fade-in relative">
                    {librariesAndFrameworks.map((library, libIndex) => (
                      <>
                        <div key={libIndex} className="flex flex-col relative">
                          <div className="px-1 flex ">
                            <Icon
                              onMouseOver={() => iconTitle(library.title)}
                              onMouseOut={() => setDisplayIconTitle(false)}
                              icon={library.icon}
                              className={`hover:border rounded-sm text-[2.3rem] p-[1.5px] md:text-[2.7rem] md:p-[3px]`}
                            ></Icon>
                          </div>
                        </div>
                      </>
                    ))}
                    <div
                      className={`absolute inset-0 w-full bg-black ${displayIcons()}`}
                    ></div>
                  </div>
                </div>
              </div>
              </div>
              {/* employment */}
              <div className="flex flex-col px-2">
                <h2 className="text-[1.7rem]">Employment</h2>
                <div className="flex flex-col mt-1 ml-1">
                  <span>Seminaut Inc.</span>
                  <span>Junior Front-End Developer</span>
                  <span>06/23 - current</span>
                  {/* <button
              onClick={()=>setOpenJobDetails(true)}
              className="w-auto">Learn More!</button> */}
                  <a
                    className="decoration-solid"
                    href="https://www.guildgaming.gg"
                    target="_blank"
                  >
                    www.guildgaming.gg
                  </a>
                </div>
                {/* <Link to={www.guildgaming.gg}></Link> */}
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
        <div className="z-50 h-[56px] border-t-2 border-l border-r rounded-t-[100%] bg-black sticky bottom-0 w-screen flex flex-col justify-center">
          <FooterIcons />
        </div>

        <div
          // onAnimationEnd={handleOverflow}
          className={`absolute inset-0 w-full bg-black ${displayPage()}`}
        ></div>
      </div>
    </>
  )
}
