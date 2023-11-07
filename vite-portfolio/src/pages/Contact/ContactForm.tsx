import { useRef } from "react"
import emailjs from "@emailjs/browser"

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)

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
          },
          (error) => {
            console.log("error.text", error.text)
          }
        )
    }
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col text-white w-full items-center">
        <label>Name</label>
        <input className="text-black" type="text" name="user_name" />
        <label>Email</label>
        <input className="text-black" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="text-black" name="message" />
        <input type="submit" value="Send" />
      </div>
    </form>
  )
}
