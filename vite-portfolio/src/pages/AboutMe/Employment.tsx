import { type ComponentProps } from "react"


const Employment:React.FC<ComponentProps<"div">> = ({className}) => {
  return (
    <div className={`px-2 ${className}`}>
      <div className="sm:border-2 sm:px-4 sm:py-2">
      <h2 className="text-[1.4rem] uppercase sm:text-[1.7rem]">Employment</h2>
      <div className="flex flex-col mt-1 ml-1 sm:text-[1.1rem] sm:gap-4">
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
