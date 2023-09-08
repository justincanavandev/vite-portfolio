import React from 'react'


export type PortfolioContextType = {

    navBarHeight: string
    setNavBarHeight: React.Dispatch<React.SetStateAction<string>>
    componentHeight: string
    setComponentHeight: React.Dispatch<React.SetStateAction<string>>
    screenWidth: number
    setScreenWidth: React.Dispatch<React.SetStateAction<number>>
}

export type Project = {
    name: string
    githubRepo: string
    liveLink: string
    thumbnail: string
  }