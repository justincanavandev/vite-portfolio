import React from "react"



export type GlobalContextType = {
  componentHeight: string
  setComponentHeight: React.Dispatch<React.SetStateAction<string>>
  screenWidth: number
  setScreenWidth: React.Dispatch<React.SetStateAction<number>>
  ColorPicker: () => JSX.Element
}
