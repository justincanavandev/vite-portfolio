import { createContext } from "react"
import type { PortfolioContextType } from "../types/types"

export const PortfolioContext = createContext<PortfolioContextType>(
  {} as PortfolioContextType
)
