import React from 'react'
import "../Navbar/Navbar.css"

const Navbar =()=>{
    return(
        <nav className="nav-wrapper">
            <a href="/" className="text">AutoML</a>
            <ul className="nav-links ">
                <li><a id="refone" href="/login">Login</a></li>
                <li><a id="reftwo" href="/signup">Signup</a></li>

            </ul>

        </nav>
    )
}

export default Navbar