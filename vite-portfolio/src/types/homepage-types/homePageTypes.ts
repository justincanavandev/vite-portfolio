export type Bubble = {
    title: string
    leftClass: string
    mtClass: string
    leftSm: string
    leftMd: string
    leftLg: string
}

export type HomePageContextType = {
    bubbles: Bubble[]
    boxShadowClass: string
    setBoxShadowClass: React.Dispatch<React.SetStateAction<string>>
    bubbleAnimationClass: string
    setBubbleAnimationClass: React.Dispatch<React.SetStateAction<string>>
    getBubbleAnimationClass(screenWidth: number): "" | "bubble-div" | "bubble-div-xs" | "bubble-div-sm" | "bubble-div-md" | "bubble-div-lg" | "bubble-div-xl" | "bubble-div-2xl"
}
