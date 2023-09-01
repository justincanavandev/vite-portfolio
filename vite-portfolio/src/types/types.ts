import React from 'react'


export type PortfolioContextType = {

    navBarHeight: string
    setNavBarHeight: React.Dispatch<React.SetStateAction<string>>
    componentHeight: string
    setComponentHeight: React.Dispatch<React.SetStateAction<string>>
}