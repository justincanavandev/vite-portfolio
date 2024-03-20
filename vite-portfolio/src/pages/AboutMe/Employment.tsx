import { type ComponentProps } from "react"

const Employment: React.FC<ComponentProps<"div">> = ({ className }) => {
  return (
    <div className={`px-2 lg:px-0 ${className}`}>
      <div className="lg:mt-[-.5rem]">
        <h2 className=" uppercase">Employment</h2>
        <div className="flex flex-col mt-1 ml-1 text-[.9rem] sm:text-[1.1rem] lg:text-[1.4rem] xl:text-[1.7rem] lg:flex-row lg:gap-8">
          <div className="flex flex-col">
            <span className="">Seminaut Inc.</span>
            <span className="">Full-Stack Developer</span>
          </div>
          <div className="flex flex-col">
            <span className="">06/23 - current</span>

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
    </div>
  )
}

export default Employment
