import { useContext, useRef } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { ContactForm } from "./ContactForm"
import FooterIcons from "../../components/FooterIcons"

export default function Contact() {
  const { isModalOpen, openOrClose, screenHeight } = useContext(GlobalContext)

  const headerRef = useRef<HTMLHeadingElement>(null)

  return (
    <>
      <div
        className={` bg-black
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
          className="text-[3rem] bg-teal-gradient pl-2 text-white font-oswald uppercase sm:w-fit sm:pl-3 sm:pr-8 sm:rounded-r-full md:text-[3.4rem] lg:text-[3.8rem]"
        >
          Contact
        </h1>
        <ContactForm />
        {/* <div className={`pt-1.5 ${screenHeight < 650 && "mt-[15px]"}`}>
          <FooterIcons />
        </div> */}
      </div>
    </>
  )
}
