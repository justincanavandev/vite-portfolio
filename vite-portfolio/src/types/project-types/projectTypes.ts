import React from "react"

export type Project = {
  name: string
  githubRepo: string
  liveLink: string
  thumbnail: string
  // absoluteLeft: string
  description: string
}

export type ProjectsContextType = {
  showProjectDetails: boolean
  setShowProjectDetails: React.Dispatch<React.SetStateAction<boolean>>
  hasPageRendered: boolean
  setHasPageRendered: React.Dispatch<React.SetStateAction<boolean>>
  featuredProject: Project
  setFeaturedProject: React.Dispatch<React.SetStateAction<Project>>
  showAnimation: boolean
  setShowAnimation: React.Dispatch<React.SetStateAction<boolean>>
  closeAnimation: boolean
  setCloseAnimation: React.Dispatch<React.SetStateAction<boolean>>
  imgOpacityClass: string
  setImgOpacityClass: React.Dispatch<React.SetStateAction<string>>
  detailsOpacityClass: string
  setDetailsOpacityClass: React.Dispatch<React.SetStateAction<string>>
  bannerOpacity: string
  setBannerOpacity: React.Dispatch<React.SetStateAction<string>>
  borderRight: string
  setBorderRight: React.Dispatch<React.SetStateAction<string>>
  projects: Project[]
  displayCard: (index: number) => void
  setAnimationState: () => void
  beforeBorderRight: string
  setBeforeBorderRight: React.Dispatch<React.SetStateAction<string>>
  beforeRoundedTR: string
  setBeforeRoundedTR: React.Dispatch<React.SetStateAction<string>>
  beforeRoundedBR: string
  setBeforeRoundedBR: React.Dispatch<React.SetStateAction<string>>
  beforeRounded: string
  setBeforeRounded: React.Dispatch<React.SetStateAction<string>>
  imgBorderExpand: string
  setImgBorderExpand: React.Dispatch<React.SetStateAction<string>>
}
