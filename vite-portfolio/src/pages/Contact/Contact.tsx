import { useContext, useRef, useState, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { ContactForm } from "./ContactForm"
import FooterIcons from "../../components/FooterIcons"
import { ContactContext } from "../../context/ContactContext"

export default function Contact() {
  const { isModalOpen, openOrClose, screenHeight } = useContext(GlobalContext)

  const headerRef = useRef<HTMLHeadingElement>(null)

  // const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  // const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false)
  // const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  // const [isMessageValid, setIsMessageValid] = useState<boolean>(false)
  // const [usernameDisplay, setUsernameDisplay] = useState<boolean>(false)
  // const [messageDisplay, setMessageDisplay] = useState<boolean>(false)
  // const [emailDisplay, setEmailDisplay] = useState<boolean>(false)
  // const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false)
  // const [emailDidntSend, setEmailDidntSend] = useState<boolean>(false)
  // const [progressValue, setProgressValue] = useState<number>(0)
  // const [emailMessagesState, setEmailMessagesState] = useState<string[]>([])
  // const emailMessagesArr: string[] = []
  // const startDomainRegex = /^[a-zA-Z0-9!#$%&'*+-/=?^_`]/
  // const endDomainRegex = /@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i
  // //domain may contain lowercase and uppercase letters (a-z, A-Z), numbers (0-9), hyphens, and periods.
  // //The TLD (top-level domain) must consist of a minimum of two alphabetical characters.
  // //The pattern ensures that the domain is valid and includes a TLD with at least two characters.

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
          ref={headerRef}
          className="text-[3rem] pt-2 pl-2 text-white font-oswald uppercase"
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
