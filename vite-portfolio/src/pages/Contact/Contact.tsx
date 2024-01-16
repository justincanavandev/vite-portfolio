import { useContext, useRef } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { ContactForm } from "./ContactForm"
import FooterIcons from "../../components/FooterIcons"

export default function Contact() {
  const { isModalOpen, openOrClose, screenHeight } = useContext(GlobalContext)

  // const headerRef = useRef<HTMLHeadingElement>(null)

  return (
    <>
      <div
        className={`${
          screenHeight < 650 ? "h-[602px]" : "min-h-[calc(100vh-48px)]"
        } overflow-x-scroll overflow-y-scroll bg-black
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
          // ref={headerRef}
          className="text-[3rem] pl-2 text-white font-oswald uppercase md:text-[3.4rem] lg:text-[3.8rem]"
        >
          Contact
        </h1>
        <ContactForm />
        <div className={`pt-1.5 ${screenHeight < 650 && "mt-[15px]"}`}>
          <FooterIcons />
        </div>
      </div>
    </>
  )
}
