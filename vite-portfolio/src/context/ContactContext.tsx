import { createContext } from "react"
import type { ContactContextType } from "../types/contactTypes"

export const ContactContext = createContext<ContactContextType>(
  {} as ContactContextType
)