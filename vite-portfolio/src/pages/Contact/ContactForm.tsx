import { useRef, useContext, useEffect, useCallback } from "react"
import emailjs from "@emailjs/browser"
import { Icon } from "@iconify/react"
import { GlobalContext } from "../../context/GlobalContext"
import type { ContactContextType } from "../../types/contactTypes"
import { ContactContext } from "../../context/ContactContext"
import "./progress.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { Link } from "react-router-dom"
// import { faPhone } from "@fortawesome/free-solid-svg-icons"
// import toast, { Toaster } from "react-hot-toast"

export const ContactForm = () => {
  const { screenHeight, screenWidth } = useContext(GlobalContext)
  // const { raiseProgressValueTest } = useContext(ContactContext)

  const form = useRef<HTMLFormElement>(null)

  const {
    isEmailSent,
    isUsernameValid,
    isEmailValid,
    isMessageValid,
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
    showSuccessMessage,
    handleUserName,
    handleEmail,
    handleMessage,
    handleUsernameDisplay,
    handleEmailDisplay,
    handleMessageDisplay,
    raiseProgressValue,
    // raiseProgressValueTest,
    username,
    setUsername,
    email,
    setEmail,
    message,
    setMessage,
  }: ContactContextType = useContext(ContactContext)

  // const [phoneIconDisplay, setPhoneIconDisplay] = useState<boolean>(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.current) {
      setIsEmailLoading(true)
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
            setTimeout(() => {
              setIsEmailLoading(false)
              setUsername("")
              setUsernameDisplay(false)
              setEmail("")
              setEmailDisplay(false)
              setMessage("")
              setMessageDisplay(false)
              setEmailDisplay(false)
              result.text === "OK" && showSuccessMessage()
            }, 2000)
          },
          (error) => {
            setTimeout(() => {
              setIsEmailLoading(false)
              setEmailDidntSend(true)

              console.log("error.text", error.text)
            }, 2000)
          }
        )
    }
  }

  const raiseProgressValueTest = useCallback(() => {
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
  }, [
    isEmailLoading,
    progressValue,
    setIsEmailLoading,
    setProgressValue,
    setUsername,
    setUsernameDisplay,
    setEmail,
    setEmailDisplay,
    setMessage,
    setMessageDisplay,
    showSuccessMessage,
  ])

  const emailClasses =
    "absolute flex bottom-16 right-0 left-0 font-oswald text-[1.2rem] md:text-[1.6rem] md:top-4 md:flex md:justify-center md:h-[48px] md:w-[200px] md:mx-auto"

  useEffect(() => {
    if (progressValue < 1 && isEmailLoading) {
      raiseProgressValueTest()
      // raiseProgressValue()
    }
  }, [progressValue, isEmailLoading, raiseProgressValueTest])

  const errorMessages = (
    <>
      <div className="flex flex-col w-full items-center mx-auto text-white gap-2 md:absolute md:top-[-13px] md:right-[-170px] md:w-[150px] lg:right-[-200px] lg:w-[180px]">
        <div
          className={`mt-3 flex w-full flex-wrap ${
            screenHeight < 650 ? "h-[120px]" : ""
          } ${
            emailMessagesState.length > 0 ||
            (usernameDisplay && !isUsernameValid) ||
            (messageDisplay && !isMessageValid)
              ? ""
              : ""
          } max-w-[300px]`}
        >
          <div
            className={`w-full h-fit flex flex-wrap text-[1.15rem] md:text-[1.25rem] lg:text-[1.4rem] ${
              emailMessagesState.length > 0 ||
              (usernameDisplay && !isUsernameValid) ||
              (messageDisplay && !isMessageValid)
                ? "border md:rounded-sm py-1"
                : ""
            }  px-2`}
          >
            {!isUsernameValid && usernameDisplay && (
              <span
                className={`h-auto min-w-[50%] ${
                  emailMessagesState.length === 0 &&
                  (!messageDisplay || !isUsernameValid)
                    ? ""
                    : "md:mb-3"
                }`}
              >
                -Name required.
              </span>
            )}

            {!isMessageValid && messageDisplay && (
              <span
                className={`h-auto min-w-[50%] ${
                  emailMessagesState.length === 0 &&
                  (!usernameDisplay || !isMessageValid)
                    ? ""
                    : "md:mb-3"
                }`}
              >
                -Message required.
              </span>
            )}

            {emailDisplay &&
              emailMessagesState.map((message, index) => (
                <p
                  className={`first:max-w-[280px] min-w-[50%] ${
                    index < emailMessagesState.length - 1 ? "md:mb-3" : ""
                  } first-line:h-auto whitespace-normal`}
                >
                  {message}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <form className="" ref={form} onSubmit={sendEmail}>
      <div
        className={`flex flex-col text-white text-[1.2rem] font-oswald min-w-full my-8 md:text-[1.5rem] lg:text-[1.7rem]
    
 `}
      >
        {/* <Link
          to="tel:2012188720"
          className="absolute top-[7.3rem] right-6"
          target="_blank"
          onMouseOver={() => setPhoneIconDisplay(true)}
          onMouseOut={() => setPhoneIconDisplay(false)}
        >
          <FontAwesomeIcon className="z-10 text-[1.8rem]" icon={faPhone} />
        </Link> */}

        {/* {phoneIconDisplay && (
          <span className="absolute top-[4.6rem] right-4">201-218-8720</span>
        )} */}
        <div className="flex flex-col border gap-2 py-5 w-[300px] mx-auto rounded-sm items-center md:relative md:w-[400px] lg:w-[600px]">
          {screenWidth >= 768 && errorMessages}
          <label>Name</label>
          <div className="relative">
            <input
              onChange={(e) => handleUserName(e)}
              className={`text-black w-[180px] md:w-[220px] lg:w-[250px] px-[2px] rounded-sm ${
                usernameDisplay
                  ? isUsernameValid
                    ? "outline-green-500"
                    : "outline-red-500"
                  : ""
              }`}
              type="text"
              value={username}
              name="user_name"
              onFocus={handleUsernameDisplay}
            />
            {usernameDisplay ? (
              isUsernameValid ? (
                <Icon
                  className="text-green-500 absolute right-[-45px] top-1 text-[1.5rem]
"
                  icon="ic:baseline-check"
                ></Icon>
              ) : (
                <Icon
                  className="text-red-400 absolute right-[-45px] top-0 text-[1.5rem]"
                  icon="ph:x"
                ></Icon>
              )
            ) : (
              ""
            )}
          </div>

          {/* email section */}

          <label>Email</label>
          <div className="relative">
            <input
              onChange={(e) => handleEmail(e)}
              onFocus={handleEmailDisplay}
              className={`text-black w-[180px] md:w-[220px] lg:w-[250px] px-[2px] rounded-sm ${
                emailDisplay
                  ? isEmailValid
                    ? "outline-green-500"
                    : "outline-red-500"
                  : ""
              }`}
              type="email"
              value={email}
              name="user_email"
            />
            {emailDisplay ? (
              isEmailValid ? (
                <Icon
                  className="text-green-500 absolute right-[-45px] top-1 text-[1.5rem]
"
                  icon="ic:baseline-check"
                ></Icon>
              ) : (
                <Icon
                  className="text-red-400 absolute right-[-45px] top-0 text-[1.5rem]"
                  icon="ph:x"
                ></Icon>
              )
            ) : (
              ""
            )}
          </div>

          {/* message section */}

          <label>Message</label>
          <div className="relative">
            <textarea
              onChange={(e) => handleMessage(e)}
              className={`text-black w-[180px] md:w-[220px] lg:w-[250px] px-[2px] rounded-sm ${
                messageDisplay
                  ? isMessageValid
                    ? "outline-green-500"
                    : "outline-red-500"
                  : ""
              }`}
              name="message"
              value={message}
              onFocus={handleMessageDisplay}
            />
            {messageDisplay ? (
              isMessageValid ? (
                <Icon
                  className="text-green-500 absolute right-[-45px] top-1 text-[1.5rem]
"
                  icon="ic:baseline-check"
                ></Icon>
              ) : (
                <Icon
                  className="text-red-400 absolute right-[-45px] top-4 text-[1.5rem]"
                  icon="ph:x"
                ></Icon>
              )
            ) : (
              ""
            )}
          </div>
          <button
            disabled={
              isUsernameValid === false ||
              isMessageValid === false ||
              isEmailValid === false
            }
            onClick={raiseProgressValue}
            type="submit"
            value="Send"
            className="border px-3 py-1 mt-2 disabled:opacity-50"
          >
            Send
          </button>
          {/* <button
            disabled={
              isUsernameValid === false ||
              isMessageValid === false ||
              isEmailValid === false
            }
            onClick={raiseProgressValueTest}
            type="button"
            value="Send"
            className="border absolute left-[-100px] px-3 py-1 mt-2 disabled:opacity-50"
          >
            Test
          </button> */}
        </div>

        {/* error messages */}

        {screenWidth < 768 && errorMessages}
      </div>
      {isEmailLoading && (
        <div
          className={`text-white ${emailClasses} flex-col items-center bottom-[4rem]  `}
        >
          <p className="">Sending...</p>
          <progress className="appearance-none" value={progressValue} />
        </div>
      )}
      {isEmailSent && (
        <div
          className={` ${emailClasses} justify-center px-2`}
        >
          <span className="text-white">Email sent!</span>
        </div>
      )}
      {emailDidntSend && (
        <div className={`${emailClasses} border border-white justify-center`}>
          <span className="text-white text-[1.2rem]">
            There was an error with your email.
          </span>
        </div>
      )}
    </form>
  )
}
