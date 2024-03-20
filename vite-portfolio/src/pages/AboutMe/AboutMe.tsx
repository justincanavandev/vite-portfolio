import "../../animation.css"
import { useContext, useState } from "react"
import "../../about-me.css"
import type { Skill } from "../../types/about-me-types.ts/aboutMeTypes"
import { Icon } from "@iconify/react"
// import FooterIcons from "../../components/FooterIcons"
import { GlobalContext } from "../../context/GlobalContext"
import Employment from "./Employment"

export default function AboutMe() {
  const { screenWidth, isModalOpen, openOrClose } = useContext(GlobalContext)

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
      title: "GraphQL",
      icon: "akar-icons:graphql-fill",
    },

    // {
    //   title: "JQuery",
    //   icon: "devicon:jquery",
    // },
    {
      title: "HTML5",
      icon: "devicon:html5",
    },
    // {
    //   title: "Babel",
    //   icon: "devicon:babel",
    // },
    // {
    //   title: "Github",
    //   icon: "bi:github",
    // },
  ]

  const librariesAndFrameworks: Skill[] = [
    {
      title: "React.js",
      icon: "logos:react",
    },
    {
      title: "Next.js",
      icon: "teenyicons:nextjs-solid",
    },
    {
      title: "React Query",
      icon: "logos:react-query-icon",
    },
    {
      title: "tRPC",
      icon: "devicon-plain:trpc",
    },
    {
      title: "Express.js",
      icon: "simple-icons:express",
    },
    {
      title: "React Router",
      icon: "devicon-plain:reactrouter",
    },
    {
      title: "TailwindCSS",
      icon: "devicon:tailwindcss",
    },
    {
      title: "Handlebars.js",
      icon: "vscode-icons:file-type-handlebars",
    },
  ]

  const databases: Skill[] = [
    {
      title: "PostgreSQL",
      icon: "logos:postgresql",
    },
    {
      title: "Prisma",
      icon: "file-icons:prisma",
    },
    {
      title: "SQLite",
      icon: "file-icons:sqlite",
    },
    {
      title: "SQLAlchemy",
      icon: "simple-icons:sqlalchemy",
    },
    {
      title: "MySQL",
      icon: "devicon:mysql",
    },
    {
      title: "Sequelize",
      icon: "devicon:sequelize",
    },
    {
      title: "MongoDB",
      icon: "devicon:mongodb",
    },
    {
      title: "Mongoose",
      icon: "simple-icons:mongoose",
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
  // const [_, setFooterOpacity] = useState<string>("opacity-0")

  const handleOverflow = () => {
    if (overflowBoolean) {
      setOverflowClass("")
      setMainDivOverflow("overflow-scroll")
      // setFooterOpacity("opacity-100")
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

  // const displayPage = () => {
  //   if (screenWidth < 475) {
  //     return "display-page"
  //   }
  //   if (screenWidth >= 475 && screenWidth < 640) {
  //     return "display-page-xs"
  //   }
  //   if (screenWidth >= 640 && screenWidth < 768) {
  //     return "display-page-sm"
  //   }
  //   if (screenWidth >= 768 && screenWidth < 1024) {
  //     return "display-page-md"
  //   }
  //   if (screenWidth >= 1024 && screenWidth < 1280) {
  //     return "display-page-lg"
  //   }
  //   if (screenWidth >= 1280 && screenWidth < 1536) {
  //     return "display-page-xl"
  //   }
  //   if (screenWidth >= 1536) {
  //     return "display-page-2xl"
  //   }

  //   return ""
  // }

  return (
    <>
      <div
        id="about-me"
        className={`w-full bg-black mb-4 mt-4 font-oswald flex flex-col lg:max-w-screen  text-white ${overflowClass}   ${
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
          className={`flex flex-col  ${mainDivOverflow} z-10 grow mb-4 sm:w-full sm:flex-row `}
        >
          <div className="flex flex-col gap-4 sm:gap-8">
            <h2 className="text-[2.5rem] bg-teal-gradient pl-2 uppercase sm:text-[3rem] w-fit sm:pl-3 pr-8 rounded-r-full">
              About Me
            </h2>
            <div className="lg:flex lg:justify-between">
              <p className="text-[1.1rem] px-5 xs:pl-5 xs:pr-[30%] sm:text-[1.3rem] sm:pr-8 md:px-5 md:max-w-[48%] lg:text-[1.7rem] lg:w-[46%] 2xl:text-[2rem]">
                A Full-Stack Developer specializing in technologies ranging from
                TypeScript, React, Next.js, Node.js, T3, Express.js, GraphQL,
                API construction, Python, and more.
                {/* As a freelance musician for over a decade, my commitment to the art of crafting immersive experiences has been my driving motivation. */}
              </p>
              <Employment className="hidden lg:flex lg:flex-col lg:h-fit lg:w-[46%] lg:text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.7rem]" />
            </div>

            <div className="px-2 sm:flex sm:flex-col sm:gap-4 lg:w-screen md:max-w-[550px] lg:flex-row lg:justify-between lg:max-w-none lg:flex-wrap lg:px-6 lg:mt-6">
              <div className="flex flex-col mt-4 gap-3 sm:gap-5 sm:max-w-[450px] md:max-w-[600px] lg:w-[46%] lg:mt-0">
                <div className="flex justify-between items-center text-[1.3rem] sm:text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.7rem]">
                  <h3 className="uppercase">Languages and Tools </h3>
                  {displayIconTitle &&
                    containsDisplayedIcon(languagesAndTools) && (
                      <span className="mr-[.8rem]">{displayedIcon}</span>
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
                            className={` relative hover:border p-[1.5px] rounded-md text-[2.3rem] sm:text-[2.7rem] lg:text-[3rem]  xl:text-[3.4rem] 2xl:text-[4.1rem] md:p-[3px]`}
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
              <div className="flex-col lg:w-[46%]">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center mt-2 text-[1.3rem] sm:text-[1.8rem] lg:mt-0 xl:text-[2.2rem] 2xl:text-[2.7rem]">
                    <h3 className="uppercase ">Libraries and Frameworks </h3>
                    {displayIconTitle &&
                      containsDisplayedIcon(librariesAndFrameworks) && (
                        <span className="pr-[.8rem] sm:pr-0">
                          {displayedIcon}
                        </span>
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
                              className={`hover:border rounded-sm text-[2.3rem] p-[1.5px] sm:text-[2.7rem] lg:text-[3rem] xl:text-[3.4rem] 2xl:text-[4.1rem] md:p-[3px]`}
                            ></Icon>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-col lg:w-[46%]">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center mt-2 text-[1.3rem] sm:text-[1.8rem] lg:mt-0 xl:text-[2.2rem] 2xl:text-[2.7rem]">
                    <h3 className="uppercase ">Databases and ORMs</h3>
                    {displayIconTitle && containsDisplayedIcon(databases) && (
                      <span className="pr-[.8rem] sm:pr-0">
                        {displayedIcon}
                      </span>
                    )}
                  </div>
                  <div className="flex opacity-fade-in relative">
                    {databases.map((database, dbIndex) => (
                      <>
                        <div key={dbIndex} className="flex flex-col relative">
                          <div className="px-1 flex ">
                            <Icon
                              onMouseOver={() => iconTitle(database.title)}
                              onMouseOut={() => setDisplayIconTitle(false)}
                              icon={database.icon}
                              className={`hover:border rounded-sm text-[2.3rem] p-[1.5px] sm:text-[2.7rem] md:p-[3px] lg:text-[3rem] xl:text-[3.4rem] 2xl:text-[4.1rem] `}
                            ></Icon>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div
                onAnimationEnd={handleOverflow}
                className={`absolute inset-0 w-full bg-black ${displayIcons()}`}
              ></div>
            </div>

            <Employment className="flex flex-col mt-4 text-[1.3rem] sm:text-[1.7rem] sm:w-auto lg:hidden" />
          </div>
          {/* <Employment className="hidden lg:flex lg:flex-col lg:mt-4 lg:h-fit lg:w-[33%] lg:items-center lg:text-[2.2rem]" /> */}

          {/* <div
            onAnimationEnd={handleOverflow}
            className={`absolute inset-0 w-full h-full bg-black ${displayPage()}`}
          ></div> */}
        </div>
        {/* <div
          className={`z-50 ${footerOpacity} transition-opacity ease-linear duration-500 h-[56px] bg-black sticky bottom-0 w-screen flex flex-col justify-center`}
        >
          <FooterIcons />
        </div> */}
      </div>
    </>
  )
}
