import { useContext, useRef } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { ContactForm } from "./ContactForm"
// import FooterIcons from "../../components/FooterIcons"

export default function Contact() {
  const { isModalOpen, openOrClose } = useContext(GlobalContext)

  const headerRef = useRef<HTMLHeadingElement>(null)

  return (
    <>
      <div 
      id="contact"
        className={` bg-black min-w-full
           ${
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
        <h1
          ref={headerRef}
          className=" bg-darkTeal pl-2 text-white font-oswald uppercase w-fit sm:pl-3 pr-8 rounded-r-full text-[2rem] sm:text-[2.5rem] 2xl:text-[2.75rem]"
        >
          Contact
        </h1>
        <ContactForm />
      </div>
    </>
  )
}
