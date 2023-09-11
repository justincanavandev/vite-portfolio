import { createContext } from "react"
import type { HomePageContextType } from "../types/homepage-types/homePageTypes"

export const HomePageContext = createContext<HomePageContextType>(
  {} as HomePageContextType
)