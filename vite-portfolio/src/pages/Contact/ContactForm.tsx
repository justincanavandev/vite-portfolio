import { useRef, useState, useContext, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Icon } from "@iconify/react"
import { GlobalContext } from "../../context/GlobalContext"
import type { ContactContextType } from "../../types/contactTypes"
import { ContactContext } from "../../context/ContactContext"
import "./progress.css"
// import { raiseProgressValue, raiseProgressValueTest, showSuccessMessage  } from "./functions/contact-functions"

export const ContactForm = () => {
  const { screenHeight, screenWidth, ColorPicker } = useContext(GlobalContext)

  const form = useRef<HTMLFormElement>(null)

  const {
    isEmailSent,
    // setIsEmailSent,
    // emailRegex,
    isUsernameValid,
    // setIsUsernameValid,
    isEmailValid,
    // setIsEmailValid,
    isMessageValid,
    // setIsMessageValid,
    usernameDisplay,
    // setUsernameDisplay,
    messageDisplay,
    // setMessageDisplay,
    emailDisplay,
    // setEmailDisplay,
    isEmailLoading,
    setIsEmailLoading,
    emailDidntSend,
    setEmailDidntSend,
    progressValue,
    // setProgressValue,
    emailMessagesState,
    // setEmailMessagesState,
    // emailMessagesArr,
    // startDomainRegex,
    // endDomainRegex,
    // emailMessageObj,
    showSuccessMessage,
    handleUserName,
    handleEmail,
    handleMessage,
    handleUsernameDisplay,
    handleEmailDisplay,
    handleMessageDisplay,
    raiseProgressValue,
    raiseProgressValueTest
  }: ContactContextType = useContext(ContactContext)

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
