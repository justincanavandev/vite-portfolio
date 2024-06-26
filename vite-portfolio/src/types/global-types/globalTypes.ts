import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React from "react"

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
  openOrClose: boolean
  setOpenOrClose: React.Dispatch<React.SetStateAction<boolean>>
  footerIcons: { icon: IconDefinition, url: string }[]
  iconsHeightAbove650: string
  setIconsHeightAbove650: React.Dispatch<React.SetStateAction<string>>
  iconsHeightBelow650: string
  setIconsHeightBelow650: React.Dispatch<React.SetStateAction<string>>
}
