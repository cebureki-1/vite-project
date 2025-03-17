import React from "react";
import './all.css'

const Navigation = () => {
    return(
        <nav className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">about us</a></li>
                <li><a href="/contact">communication</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;