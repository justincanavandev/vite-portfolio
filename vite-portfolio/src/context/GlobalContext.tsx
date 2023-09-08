import { createContext } from "react"
import type { GlobalContextType } from "../types/global-types/globalTypes"

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
)
