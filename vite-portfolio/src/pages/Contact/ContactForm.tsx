import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)

  const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false)
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isMessageValid, setIsMessageValid] = useState<boolean>(false)
  // It starts with one or more alphanumeric characters, plus some special characters like ".", "_", "%", and "+".
  //It is followed by the "@" symbol.
  //Then, it has one or more alphanumeric characters followed by a dot (.) at least once.
  //Finally, it ends with a top-level domain (TLD) that consists of at least 2 alphabetical characters.

  const showSuccessMessage = () => {
    setIsEmailSent(true)

    setTimeout(() => {
      setIsEmailSent(false)
    }, 2000)
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.current) {
      emailjs
        .sendForm(
          "service_odjii1l",
          "template_zhck8dl",
          form.current,
          "cf2GUkCbbMaqieWpF"
        )
        .then(
          (result) => {
            console.log("result.text", result.text)
            result.text === "OK" && showSuccessMessage()
          },
          (error) => {
            console.log("error.text", error.text)
          }
        )
    }
  }

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setIsUsernameValid(false)
    } else {
      setIsUsernameValid(true)
    }
  }
  const emailMessageObj = {
    noInput: "Must enter email!",
    startDomain: "Must include email name",
    endDomain: `Must include domain ("gmail.com", "yahoo.com")`,
    atSymbol: "Must include @",
    tld: `Must include domain ext (".com", ".net", etc)`,
  }

  const [emailMessagesState, setEmailMessagesState] = useState<string[]>([])

  const emailMessagesArr: string[] = []

  // const tldRegex = /(\.com|\.org|\.net|\.[a-zA-Z.]+)$/;
  const startDomainRegex = /^[a-zA-Z0-9!#$%&'*+-/=?^_`]/
  const endDomainRegex = /@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i
  //domain may contain lowercase and uppercase letters (a-z, A-Z), numbers (0-9), hyphens, and periods.
  //The TLD (top-level domain) must consist of a minimum of two alphabetical characters.
  //The pattern ensures that the domain is valid and includes a TLD with at least two characters.


  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value.length", e.target.value.length)
    if (e.target.value.length === 0) {
      // setEmailMessage([emailMessageObj.noInput])
      emailMessagesArr.push(emailMessageObj.noInput)
      setEmailMessagesState(emailMessagesArr)
    }
    if (e.target.value.length > 0) {
      let filteredArr = emailMessagesArr.filter(
        (message) => message !== "Must enter email!"
      )
      setEmailMessagesState(filteredArr)

      if (!e.target.value.includes("@")) {
        emailMessagesArr.push(emailMessageObj.atSymbol)
        setEmailMessagesState(emailMessagesArr)
      }
      if (e.target.value.includes("@")) {
        let filteredArr = emailMessagesArr.filter(
          (message) => message === "Must include @"
        )
        setEmailMessagesState(filteredArr)
      }
      // if (!tldRegex.test(e.target.value)){
      //   emailMessagesArr.push(emailMessageObj.tld)
      //   setEmailMessagesState(emailMessagesArr)
      // }
      // if (tldRegex.test(e.target.value)){

      //   let filteredArr = emailMessagesArr.filter((message)=>
      //  message !== `Must include domain ext (".com", ".net", etc)`)
      //   setEmailMessagesState(filteredArr)
      // }
      if (!startDomainRegex.test(e.target.value)) {
        emailMessagesArr.push(emailMessageObj.startDomain)
        setEmailMessagesState(emailMessagesArr)
      }
      if (startDomainRegex.test(e.target.value)) {
        let filteredArr = emailMessagesArr.filter(
          (message) => message !== "Must include email name"
        )
        setEmailMessagesState(filteredArr)
      }
      if (!endDomainRegex.test(e.target.value)) {
        emailMessagesArr.push(emailMessageObj.endDomain)
        setEmailMessagesState(emailMessagesArr)
      }
      if (endDomainRegex.test(e.target.value)) {
        let filteredArr = emailMessagesArr.filter(
          (message) => message !== "Must include domain name"
        )
        setEmailMessagesState(filteredArr)
      }
    }

    if (!e.target.value.match(emailRegex)) {
      console.log("hello")
      setIsEmailValid(false)
    } else {
      setIsEmailValid(true)
    }
    console.log("emailMessagesArr", emailMessagesArr)
  }

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length === 0) {
      setIsMessageValid(false)
    } else {
      setIsMessageValid(true)
    }
  }

  console.log("isEmailValid", isEmailValid)

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex font-oswald flex-col border text-white  text-[1.2rem] gap-2 py-4 w-[300px] mx-auto rounded-sm items-center">
        <label>Name</label>
        <input
          onChange={(e) => handleUserName(e)}
          className="text-black"
          type="text"
          name="user_name"
        />
        {!isUsernameValid && <span>Must enter name!</span>}
        <label>Email</label>
        <input
          onChange={(e) => handleEmail(e)}
          className="text-black"
          type="email"
          name="user_email"
        />
        {/* {!isEmailValid &&
          emailMessagesArr.map((message) => <span className="text-white">{message}hello</span>)} */}
        {/* <p>hello</p> */}
        {emailMessagesState.map((message) => (
          <p>{message}</p>
        ))}

        {/* {emailMessagesArr} */}
        <label>Message</label>
        <textarea
          onChange={(e) => handleMessage(e)}
          className="text-black"
          name="message"
        />
        {!isMessageValid && <span>Must enter message!</span>}
        <button
          disabled={
            isUsernameValid === false ||
            isMessageValid === false ||
            isEmailValid === false
          }
          type="submit"
          value="Send"
          className="border px-3 py-1 mt-4 disabled:opacity-50"
        >
          Send
        </button>
        {isEmailSent && <span>Success!</span>}
      </div>
    </form>
  )
}
