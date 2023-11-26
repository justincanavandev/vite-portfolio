import { useRef, useState, useContext, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Icon } from "@iconify/react"
import { GlobalContext } from "../../context/GlobalContext"
import "./progress.css"

export const ContactForm = ({ headerHeight }: { headerHeight: string }) => {
  const { screenHeight, iconsHeightAbove650, screenWidth, ColorPicker } =
    useContext(GlobalContext)
  const form = useRef<HTMLFormElement>(null)

  const [isEmailSent, setIsEmailSent] = useState<boolean>(false)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false)
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isMessageValid, setIsMessageValid] = useState<boolean>(false)
  const [usernameDisplay, setUsernameDisplay] = useState<boolean>(false)
  const [messageDisplay, setMessageDisplay] = useState<boolean>(false)
  const [emailDisplay, setEmailDisplay] = useState<boolean>(false)
  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false)
  const [emailDidntSend, setEmailDidntSend] = useState<boolean>(false)
  const [progressValue, setProgressValue] = useState<number>(0)

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
              result.text === "OK" && showSuccessMessage()
            }, 1500)
          },
          (error) => {
            setTimeout(() => {
              setIsEmailLoading(false)
              setEmailDidntSend(true)
              console.log("error.text", error.text)
            }, 1500)
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
    noInput: "-Email required.",
    startDomain: "-Email must include email name",
    endDomain: `-Email must include domain ("gmail.com", "yahoo.com").`,
    atSymbol: "-Email must include @.",
    tld: `-Email must include domain ext (".com", ".net", etc)`,
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
    if (e.target.value.length === 0) {
      emailMessagesArr.push(emailMessageObj.noInput)
      setEmailMessagesState(emailMessagesArr)
    }
    if (e.target.value.length > 0) {
      let filteredArr = emailMessagesArr.filter(
        (message) => message !== "-Email required."
      )
      setEmailMessagesState(filteredArr)

      if (!e.target.value.includes("@")) {
        emailMessagesArr.push(emailMessageObj.atSymbol)
        setEmailMessagesState(emailMessagesArr)
      }
      if (e.target.value.includes("@")) {
        let filteredArr = emailMessagesArr.filter(
          (message) => message === "-Email must include @."
        )
        setEmailMessagesState(filteredArr)
      }
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

  // console.log(
  //   "usernameD, messageD, emailD",
  //   usernameDisplay,
  //   messageDisplay,
  //   emailDisplay
  // )

  // console.log(
  //   "isEmailV, isMessageV, isUserV",
  //   isEmailValid,
  //   isMessageValid,
  //   isUsernameValid
  // )

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        setProgressValue(progressValue + 0.01)
      }, 15)
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
      showSuccessMessage()
      setProgressValue(0)
    }, 2000)
  }

  useEffect(() => {
    if (progressValue < 1 && isEmailLoading) {
      raiseProgressValueTest()
    }
  }, [progressValue, isEmailLoading])

  const errorMessages = (
    <>
      <div className="flex flex-col w-full items-center mx-auto text-white gap-2 md:absolute md:top-[-16px] md:right-[-210px] md:w-[180px]">
        <div
          className={`mt-4 flex w-full flex-wrap ${
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
            className={`w-full h-fit flex flex-wrap ${
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
      {isEmailLoading && (
        <div className="text-white font-oswald absolute top-10 right-6">
          <p className="text-[1.2rem]">Sending...</p>
          <progress className="appearance-none" value={progressValue} />
        </div>
      )}

      <div
        className={`flex flex-col text-white text-[1.2rem] font-oswald min-w-full justify-center ${
          screenHeight >= 650
            ? `h-[calc(100vh-220px)] `
            : "-mt-[20px] md:mt-0 md:h-[440px]"
        }
    
 `}
      >
        {isEmailSent && (
          <span className="absolute top-8 right-12">Email sent!</span>
        )}
        {emailDidntSend && (
          <span className="absolute top-8 right-12">
            There was an error with your email.
          </span>
        )}
        <div className="flex flex-col mt-1 border gap-2 py-3 w-[300px] mx-auto rounded-sm items-center md:relative">
          {screenWidth >= 768 && errorMessages}
          <label>Name</label>
          <div className="relative">
            <input
              onChange={(e) => handleUserName(e)}
              className={`text-black w-[180px] px-[2px] rounded-sm ${
                usernameDisplay
                  ? isUsernameValid
                    ? "outline-green-500"
                    : "outline-red-500"
                  : ""
              }`}
              type="text"
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
              className={`text-black w-[180px] px-[2px] rounded-sm ${
                emailDisplay
                  ? isEmailValid
                    ? "outline-green-500"
                    : "outline-red-500"
                  : ""
              }`}
              type="email"
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
              className={`text-black w-[180px] px-[2px] rounded-sm ${
                messageDisplay
                  ? isMessageValid
                    ? "outline-green-500"
                    : "outline-red-500"
                  : ""
              }`}
              name="message"
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
          <button
            onClick={raiseProgressValueTest}
            type="button"
            className="border px-3 py-1 mt-2 disabled:opacity-50"
          >
            Test
          </button>
          {/* <ColorPicker/> */}
        </div>

        {/* error messages */}

        {screenWidth < 768 && errorMessages}
      </div>
    </form>
  )
}
