import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { ContactForm } from "./ContactForm"

export default function Contact() {

  const {isModalOpen, openOrClose} = useContext(GlobalContext)

    return (
    <>
        <div className={`min-h-screen whitespace-nowrap overflow-x-auto bg-black
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
          }`}>
            <h1 className="text-[3rem] pt-2 pl-2 text-white font-oswald uppercase">Contact</h1>
            <ContactForm />
         
        </div>
    
      </>
    )
  }
  