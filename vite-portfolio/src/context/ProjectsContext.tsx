import { createContext } from "react"
import type { ProjectsContextType } from "../types/project-types/projectTypes"

export const ProjectsContext = createContext
 <ProjectsContextType>({} as ProjectsContextType)
