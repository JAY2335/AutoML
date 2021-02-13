import React from 'react'
import "../Navbar/Navbar.css"

const Navbar =()=>{
    return(
        <nav className="nav-wrapper">
            <a href="/" className="text">AutoML</a>
            <ul className="nav-links ">
                <li id="refone"><a href="/login">Login</a></li>
                <li id="reftwo"><a href="/signup">Signup</a></li>

            </ul>

        </nav>
    )
}

export default Navbar