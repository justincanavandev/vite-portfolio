import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function Contact() {

  const {isModalOpen} = useContext(GlobalContext)

    return (
    <>
        <div className={`min-h-screen whitespace-nowrap overflow-x-auto bg-black ${isModalOpen && "filter brightness-[40%]"}`}>
            <h1 className="text-[3rem] pt-2 pl-2 text-white font-oswald uppercase">Contact</h1>
        </div>
      </>
    )
  }
  