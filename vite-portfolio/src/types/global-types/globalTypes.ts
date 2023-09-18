import React from "react"
import { ColorResult, RGBColor } from "react-color"


export type GlobalContextType = {
  componentHeight: string
  setComponentHeight: React.Dispatch<React.SetStateAction<string>>
  screenWidth: number
  setScreenWidth: React.Dispatch<React.SetStateAction<number>>
//   color: ColorResult | RGBColor
//   setColor: React.Dispatch<React.SetStateAction<ColorResult | RGBColor>>
//   handleColorChange: (newColor:ColorResult) => void
  ColorPicker: () => JSX.Element
}
