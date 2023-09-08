import React from "react"

export type Project = {
  name: string
  githubRepo: string
  liveLink: string
  thumbnail: string
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
  projects: Project[]
}
