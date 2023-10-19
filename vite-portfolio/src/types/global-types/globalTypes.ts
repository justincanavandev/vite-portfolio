import React from "react"
// import type { Skill } from "../about-me-types.ts/aboutMeTypes"



export type GlobalContextType = {
  componentHeight: string
  setComponentHeight: React.Dispatch<React.SetStateAction<string>>
  screenWidth: number
  setScreenWidth: React.Dispatch<React.SetStateAction<number>>
  screenHeight: number
  setScreenHeight: React.Dispatch<React.SetStateAction<number>>
  ColorPicker: () => JSX.Element
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  // icons: Skill[]

}
