import { createContext } from "react"
import type { GlobalContextType } from "../types/global-types/globalTypes"

export const ContactContext = createContext<ContactContextType>(
  {} as ContactContextType
)