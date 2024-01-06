import { useContext, useRef, useState, useEffect } from "react"
import Contact from "./Contact"
import { ContactContext } from "../../context/ContactContext"

export default function ContactPage() {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false)
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isMessageValid, setIsMessageValid] = useState<boolean>(false)
  const [usernameDisplay, setUsernameDisplay] = useState<boolean>(false)
  const [messageDisplay, setMessageDisplay] = useState<boolean>(false)
  const [emailDisplay, setEmailDisplay] = useState<boolean>(false)
  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false)
  const [emailDidntSend, setEmailDidntSend] = useState<boolean>(false)
  const [progressValue, setProgressValue] = useState<number>(0)
  const [emailMessagesState, setEmailMessagesState] = useState<string[]>([])
  const emailMessagesArr: string[] = []
  const startDomainRegex = /^[a-zA-Z0-9!#$%&'*+-/=?^_`]/
  const endDomainRegex = /@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  //domain may contain lowercase and uppercase letters (a-z, A-Z), numbers (0-9), hyphens, and periods.
  //The TLD (top-level domain) must consist of a minimum of two alphabetical characters.
  //The pattern ensures that the domain is valid and includes a TLD with at least two characters.

  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const emailMessageObj = {
    noInput: "-Email required.",
    startDomain: "-Email must include email name",
    endDomain: `-Email must include domain ("gmail.com", "yahoo.com").`,
    atSymbol: "-Email must include @.",
    tld: `-Email must include domain ext (".com", ".net", etc)`,
  }

  //   functions

  const showSuccessMessage = () => {
    setIsEmailSent(true)

    setTimeout(() => {
      setIsEmailSent(false)
    }, 2000)
  }

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)

    if (e.target.value.length === 0) {
      setIsUsernameValid(false)
    } else {
      setIsUsernameValid(true)
    }
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

    if (e.target.value.length === 0) {
      emailMessagesArr.push(emailMessageObj.noInput)
      setEmailMessagesState(emailMessagesArr)
    }
    if (e.target.value.length > 0) {
      const filteredArr = emailMessagesArr.filter(
        (message) => message !== "-Email required."
      )
      setEmailMessagesState(filteredArr)

      if (!e.target.value.includes("@")) {
        emailMessagesArr.push(emailMessageObj.atSymbol)
        setEmailMessagesState(emailMessagesArr)
      }
      if (e.target.value.includes("@")) {
        const filteredArr = emailMessagesArr.filter(
          (message) => message === "-Email must include @."
        )
        setEmailMessagesState(filteredArr)
      }
      if (!startDomainRegex.test(e.target.value)) {
        emailMessagesArr.push(emailMessageObj.startDomain)
        setEmailMessagesState(emailMessagesArr)
      }
      if (startDomainRegex.test(e.target.value)) {
        const filteredArr = emailMessagesArr.filter(
          (message) => message !== "Must include email name"
        )
        setEmailMessagesState(filteredArr)
      }
      if (!endDomainRegex.test(e.target.value)) {
        emailMessagesArr.push(emailMessageObj.endDomain)
        setEmailMessagesState(emailMessagesArr)
      }
      if (endDomainRegex.test(e.target.value)) {
        const filteredArr = emailMessagesArr.filter(
          (message) =>
            message !== `-Email must include domain ("gmail.com", "yahoo.com").`
        )
        setEmailMessagesState(filteredArr)
      }
    }

    if (!e.target.value.match(emailRegex)) {
      setIsEmailValid(false)
    } else {
      setIsEmailValid(true)
    }
  }

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    if (e.target.value.length === 0) {
      setIsMessageValid(false)
    } else {
      setIsMessageValid(true)
    }
  }

  const handleUsernameDisplay = () => {
    setUsernameDisplay(true)
  }

  const handleEmailDisplay = () => {
    if (!isEmailValid) {
      emailMessagesArr.push(emailMessageObj.noInput)
    }
    setEmailMessagesState(emailMessagesArr)
    setEmailDisplay(true)
  }

  const handleMessageDisplay = () => {
    setMessageDisplay(true)
  }

  const raiseProgressValue = () => {
    if (progressValue >= 0.99) {
      setProgressValue(0)
    } else {
      setTimeout(() => {
        setProgressValue((prevProgress) => prevProgress + 0.01)
      }, 18)
    }
  }

  const raiseProgressValueTest = () => {
    if (!isEmailLoading) {
      setIsEmailLoading(true)
    }
    if (progressValue >= 0.99) {
      setProgressValue(0)
    } else {
      setTimeout(() => {
        setProgressValue((prevProgress) => prevProgress + 0.01)
      }, 18)
    }
    setTimeout(() => {
      setIsEmailLoading(false)
      setUsername("")
      setUsernameDisplay(false)
      setEmail("")
      setEmailDisplay(false)
      setMessage("")
      setMessageDisplay(false)
      setEmailDisplay(false)
      showSuccessMessage()
      setProgressValue(0)
    }, 2000)
  }

  return (
    <>
      <ContactContext.Provider
        value={{
          isEmailSent,
          setIsEmailSent,
          emailRegex,
          isUsernameValid,
          setIsUsernameValid,
          isEmailValid,
          setIsEmailValid,
          isMessageValid,
          setIsMessageValid,
          usernameDisplay,
          setUsernameDisplay,
          messageDisplay,
          setMessageDisplay,
          emailDisplay,
          setEmailDisplay,
          isEmailLoading,
          setIsEmailLoading,
          emailDidntSend,
          setEmailDidntSend,
          progressValue,
          setProgressValue,
          emailMessagesState,
          setEmailMessagesState,
          emailMessagesArr,
          startDomainRegex,
          endDomainRegex,
          emailMessageObj,
          showSuccessMessage,
          handleUserName,
          handleEmail,
          handleMessage,
          handleUsernameDisplay,
          handleEmailDisplay,
          handleMessageDisplay,
          raiseProgressValue,
          raiseProgressValueTest,
          username,
          setUsername,
          email,
          setEmail,
          message,
          setMessage,
        }}
      >
        <Contact />
      </ContactContext.Provider>
    </>
  )
}
