import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
    <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <a href="#home" className="w3-bar-item"><img src={logo} alt="ATK" style={{ "height": "50px"}}/></a>
            <div className="w3-right w3-hide-small nav-options-container">
                <a href="#projects" className="w3-bar-item">Projects</a>
                <a href="#about" className="w3-bar-item">About</a>
                <a href="#contact" className="w3-bar-item">Contact</a>
            </div>
        </div>
    </div>
    )
}

export default Navbar;