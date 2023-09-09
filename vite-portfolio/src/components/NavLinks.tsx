import { NavLink } from 'react-router-dom'

export default function NavLinks() {
    return (
    
        <div className="gap-2 items-end flex justify-evenly ml-auto mr-2">
            
        <NavLink to="/about-me">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        </div>
    
    )
}