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
  const [overflowClass, setOverflowClass] = useState<string>("overflow-hidden")
  const [mainDivOverflow, setMainDivOverflow] = useState<string>(
    "overflow-x-hidden overflow-y-scroll"
  )
  // const [openJobDetails, setOpenJobDetails] = useState<boolean>(false)
  const [overflowBoolean, setOverflowBoolean] = useState<boolean>(false)
  const [footerOpacity, setFooterOpacity] = useState<string>("opacity-0")

  const handleOverflow = () => {
    if (overflowBoolean) {
      setOverflowClass("")
      setMainDivOverflow("overflow-scroll")
      setFooterOpacity("opacity-100")
    }
    if (!overflowBoolean) {
      setOverflowBoolean(true)
    }
  }

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
        className={`w-full bg-black font-oswald  flex flex-col  text-white ${overflowClass}  ${
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
        <div
          className={`flex flex-col gap-4 ${mainDivOverflow} z-10 grow mb-4 sm:gap-6`}
        >
          <div className="">
            <h2 className="text-[2.5rem] pl-2 uppercase">
              About Me
            </h2>

            <p className="text-[1.1rem] px-5 xs:pl-5 xs:pr-[30%] sm:text-[1.2rem] md:px-5 md:pt-6 md:max-w-[565px]">
              As a freelance musician for over a decade, I have always been
              deeply committed to the art of crafting immersive experiences.
              {/* As a freelance musician for over a decade, my commitment to the art of crafting immersive experiences has been my driving motivation. */}
            </p>
          </div>
  
          <div className="px-2 lg:w-[70%] md:max-w-[550px]">
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex justify-between items-center text-[1.3rem] sm:text-[1.4rem]">
                <h3 className="uppercase text-[1.4rem]">Languages and Tools </h3>
                {displayIconTitle &&
                  containsDisplayedIcon(languagesAndTools) && (
                    <span className=" mr-[.8rem]">{displayedIcon}</span>
                  )}
              </div>

              <div
                className={`flex pr-2 flex-wrap pt-1 opacity-fade-in relative`}
              >
                {languagesAndTools.map((tool, langIndex) => (
                  <>
                    <div key={langIndex} className="flex flex-col relative">
                      <div className="px-1 mb-2.5">
                        <Icon
                          icon={tool.icon}
                          onMouseOver={() => iconTitle(tool.title)}
                          onMouseOut={() => setDisplayIconTitle(false)}
                          className={` relative hover:border p-[1.5px] rounded-md text-[2.3rem] md:text-[2.7rem]  md:p-[3px]`}
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
                <div className="flex justify-between items-center text-[1.3rem] sm:text-[1.4rem]">
                  <h3 className="uppercase text-[1.4rem]">Libraries and Frameworks </h3>
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
                    onAnimationEnd={handleOverflow}
                    className={`absolute inset-0 w-full bg-black ${displayIcons()}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* employment */}
          <div className="flex flex-col px-2">
            <h2 className="text-[1.4rem] uppercase">Employment</h2>
            <div className="flex flex-col mt-1 ml-1 md:text-[1.1rem]">
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
          </div>
          <div
            onAnimationEnd={handleOverflow}
            className={`absolute inset-0 w-full h-full bg-black ${displayPage()}`}
          ></div>
        </div>
        <div className={`z-50 ${footerOpacity} transition-opacity ease-linear duration-500 h-[56px] bg-black sticky bottom-0 w-screen flex flex-col justify-center`}>
          <FooterIcons />
        </div>
      </div>
    </>
  )
}
