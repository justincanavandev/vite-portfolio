// import { useState } from "react"
// import AboutMe from "../pages/AboutMe"
// import Contact from "../pages/Contact"
// import Portfolio from "../pages/Portfolio"
// import Resume from "../pages/Resume"
// import Nav from "../components/Nav"

// export default function SiteContainer() {
//   const [currentPage, setCurrentPage] = useState("AboutMe")

//   const displayPage = () => {
//     if (currentPage === "Portfolio") {
//       return <Portfolio />
//     }
//     if (currentPage === "AboutMe") {
//       return <AboutMe />
//     }
//     if (currentPage === "Contact") {
//       return <Contact />
//     }
//     return <Resume />
//   }

//   const changePage = (page: any) => setCurrentPage(page)

//   return (
//     <>
//       <div>
//         <Nav 
//         currentPage={currentPage} 
//         changePage={changePage} 
//         />
//         {displayPage()}
//       </div>
//     </>
//   )
// }
