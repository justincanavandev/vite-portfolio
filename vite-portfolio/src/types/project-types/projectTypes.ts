import React from "react"

export type Icon = {
  title: string
  icon: string
}

export type Project = {
  id: number
  name: string
  githubRepo: string
  liveLink: string
  thumbnail: string
  description: string
  icons: Icon[]
  images: string[]

}

export type ProjectDetailsProps = {
  projectIndex: number
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
  viewProjectDetails: boolean
  setViewProjectDetails: React.Dispatch<React.SetStateAction<boolean>>
  projectIndex: number
  setProjectIndex: React.Dispatch<React.SetStateAction<number>>
 
}
