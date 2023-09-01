import { NavLink } from "react-router-dom"
import "../homepage.css"


function HomePage () {

    return (
        <div>
            <span className="welcome">Welcome! </span>

            <p className="click-the-bubble">Click the BUBBLE to learn more!</p>

            {/* <NavLink to="/about-me">CLICK ME</NavLink> */}
            
        </div>

    )

}

export default HomePage
