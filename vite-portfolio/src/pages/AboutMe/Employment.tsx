import { type ComponentProps } from "react"


const Employment:React.FC<ComponentProps<"div">> = ({className}) => {
  return (
    <div className={`px-2 ${className}`}>
      <div className="lg:border-2 lg:p-2 lg:mt-[-.5rem]">
      <h2 className=" uppercase">Employment</h2>
      <div className="flex flex-col mt-1 ml-1 sm:text-[1.1rem]">
        <span>Seminaut Inc.</span>
        <span>Junior Front-End Developer</span>
        <span>06/23 - current</span>

      <a
          className="decoration-solid"
          href="https://www.guildgaming.gg"
          target="_blank"
        >
          www.guildgaming.gg
        </a>
      </div>
      </div>
    </div>
  )
}

export default Employment
