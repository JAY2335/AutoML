import React from 'react'
import {Link} from "react-router-dom"

const Navbar=()=>{
    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <a href="/" className="brand-logo" style={{left:12+"px"}}>Ninja </a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    

                </ul>
            </div>
        </nav>
    )
}

export default Navbar