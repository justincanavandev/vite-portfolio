// import Projects from "./Projects"
import Projects2 from "./Projects2"
import { useState } from "react"
import type { Project } from "../../types/project-types/projectTypes"
import { ProjectsContext } from "../../context/ProjectsContext"
// import dog from "../../assets/dog.jpg"
// import walrus from "../../assets/walrus.jpg"
import shoes from "../../assets/shoes.png"
import createpost from "../../assets/code-cove/create-post.png"
import signup from "../../assets/code-cove/sign-up.png"
import yourposts from "../../assets/code-cove/your-posts.png"
import landingpage from "../../assets/code-cove/landing-page.png"
import homepage from "../../assets/gamers-circuit/homepage.png"
import cart from "../../assets/gamers-circuit/cart.png"
import orderHistory from "../../assets/gamers-circuit/order-history.png"
import products from "../../assets/gamers-circuit/products.png"
import allRestaurants from "../../assets/chi-hotspot/all-restaurants.png"
import oneRestaurant from "../../assets/chi-hotspot/restaurant-page.png"
import reviews from "../../assets/chi-hotspot/my-reviews.png"
import ProjectDetails from "./ProjectDetails"
import { Route, Routes, useParams } from "react-router-dom" 
import Resume from "../Resume"

export default function ProjectsPage() {
  const [viewProjectDetails, setViewProjectDetails] = useState<boolean>(false)

  // const {projectId } =useParams()
  // console.log('projectId', projectId)

  const projects: Project[] = [
    {
      id: 1,
      name: "Gamer's Circuit",
      githubRepo:
        "https://github.com/justincanavanmusic/electronics-e-commerce",
      liveLink: "https://shielded-basin-55972.herokuapp.com/",
      thumbnail: homepage,
      description:
        "An immersive MERN-stack e-commerce application with a focus on PC and gaming equipment.",
      images: [products, orderHistory, cart],
      icons: [
        {
          title: "React.js",
          icon: "logos:react",
        },
        {
          title: "JavaScript",
          icon: "devicon:javascript",
        },
        {
          title: "MongoDB",
          icon: "devicon:mongodb",
        },
        {
          title: "Express.js",
          icon: "simple-icons:express",
        },
        {
          title: "NodeJS",
          icon: "devicon:nodejs",
        },
        {
          title: "GraphQL",
          icon: "fontisto:graphql",
        },
        {
          title: "Bootstrap",
          icon: "devicon:bootstrap",
        },
        {
          title: "Stripe",
          icon: "bxl:stripe",
        },
      ],
    },
    {
      id: 2,
      name: "CodeCove",
      githubRepo: "https://github.com/justincanavanmusic/tech-blog",
      liveLink: "https://floating-fortress-15177.herokuapp.com/",
      thumbnail: landingpage,
      description:
        "A Full-Stack blog application that enables users to create posts, leave comments, and more.",
      images: [yourposts, createpost, signup],
      icons: [
        {
          title: "JavaScript",
          icon: "devicon:javascript",
        },
        {
          title: "Handlebars.js",
          icon: "vscode-icons:file-type-handlebars",
        },
        {
          title: "NodeJS",
          icon: "devicon:nodejs",
        },
        {
          title: "Express.js",
          icon: "simple-icons:express",
        },
        {
          title: "MySQL2",
          icon: "devicon:mysql",
        },
        {
          title: "Sequelize",
          icon: "devicon:sequelize",
        },
        {
          title: "Bootstrap",
          icon: "devicon:bootstrap",
        },
      ],
    },
    {
      id: 3,
      name: "Chicago Hotspot",
      githubRepo: "https://github.com/allisonnault/Chicago-Attractions",
      liveLink: "https://ancient-wildwood-93900.herokuapp.com/",
      thumbnail: allRestaurants,
      description:
        "A Full-Stack application showcasing Michelin Star restaurants based in Chicago, IL.",
      images: [oneRestaurant, reviews, shoes],
      icons: [
        {
          title: "JavaScript",
          icon: "devicon:javascript",
        },
        {
          title: "Handlebars.js",
          icon: "vscode-icons:file-type-handlebars",
        },
        {
          title: "Node.js",
          icon: "devicon:nodejs",
        },
        {
          title: "Express.js",
          icon: "simple-icons:express",
        },
        {
          title: "MySQL2",
          icon: "devicon:mysql",
        },
        {
          title: "Sequelize",
          icon: "devicon:sequelize",
        },
        {
          title: "Bootstrap",
          icon: "devicon:bootstrap",
        },
      ],
    },
  ]

  // states

  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(true)
  const [hasPageRendered, setHasPageRendered] = useState<boolean>(false)
  const [featuredProject, setFeaturedProject] = useState<Project>(projects[0])
  const [showAnimation, setShowAnimation] = useState<boolean>(false)
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false)
  const [imgOpacityClass, setImgOpacityClass] =
    useState<string>("brightness-50")
  const [detailsOpacityClass, setDetailsOpacityClass] =
    useState<string>("opacity-100")
  const [bannerOpacity, setBannerOpacity] = useState<string>("opacity-100")
  const [borderRight, setBorderRight] = useState<string>("border-b-2")
  const [beforeBorderRight, setBeforeBorderRight] =
    useState<string>("border-b-0")
  const [beforeRoundedTR, setBeforeRoundedTR] = useState<string>("rounded-tr-0")
  const [beforeRoundedBR, setBeforeRoundedBR] = useState<string>("rounded-br-0")
  const [beforeRounded, setBeforeRounded] = useState<string>("rounded-r-0")
  const [imgBorderExpand, setImgBorderExpand] = useState<string>("")
  const [projectIndex, setProjectIndex] = useState<number>(0)

  function setAnimationState() {
    if (closeAnimation) {
      null
    } else {
      setShowAnimation(true)
    }
  }

  // displayCard

  function displayCard(index: number) {
    if (showProjectDetails && featuredProject.name !== projects[index].name) {
      console.log("one")
      setFeaturedProject(projects[index])
    }

    if (showProjectDetails && featuredProject.name === projects[index].name) {
      console.log("two")

      setCloseAnimation(true)

      if (showAnimation === false) {
        setShowAnimation(true)
      }

      setShowAnimation((prevState) => {
        return !prevState
      })

      setTimeout(() => {
        setImgOpacityClass("brightness-50")
        setDetailsOpacityClass("opacity-0")
        setBannerOpacity("opacity-0")

        setShowProjectDetails(!showProjectDetails)
        setFeaturedProject({} as Project)
      }, 300)
    }

    if (showProjectDetails === false && !featuredProject.name) {
      console.log("three")
      setFeaturedProject(projects[index])

      setCloseAnimation(false)
      setShowAnimation(false)

      setShowAnimation((prevState) => {
        return !prevState
      })

      setShowProjectDetails(true)

      setTimeout(() => {
        setImgOpacityClass("brightness-100")
        setDetailsOpacityClass("opacity-100")
        setBeforeRoundedTR("rounded-bl-0")
        setBeforeRoundedBR("rounded-br-0")
      }, 300)
    }
  }

  return (
    <ProjectsContext.Provider
      value={{
        showProjectDetails,
        setShowProjectDetails,
        hasPageRendered,
        setHasPageRendered,
        featuredProject,
        setFeaturedProject,
        showAnimation,
        setShowAnimation,
        closeAnimation,
        setCloseAnimation,
        imgOpacityClass,
        setImgOpacityClass,
        detailsOpacityClass,
        setDetailsOpacityClass,
        bannerOpacity,
        setBannerOpacity,
        borderRight,
        setBorderRight,
        projects,
        displayCard,
        setAnimationState,
        beforeBorderRight,
        setBeforeBorderRight,
        beforeRoundedTR,
        setBeforeRoundedTR,
        beforeRoundedBR,
        setBeforeRoundedBR,
        beforeRounded,
        setBeforeRounded,
        imgBorderExpand,
        setImgBorderExpand,
        viewProjectDetails,
        setViewProjectDetails,
        projectIndex,
        setProjectIndex,
      }}
    >
   
      {viewProjectDetails ?
      <ProjectDetails/> : <Projects2 />
}
  
    </ProjectsContext.Provider>
  )
}
