import React from 'react';
import bannerLogo from '../assets/banner.png'

const Header = () => {
    return (
    <header className="w3-display-container w3-content w3-wide" style={{"maxWidth": "1500px"}} id="home">
        <img className="w3-image" src="https://singlecolorimage.com/get/cccccc/1500x800" alt="Architecture" width="1500" height="800"/>
        <div className="w3-display-middle w3-margin-top w3-center">
          <img className="header-img" src={bannerLogo} alt="Atk Banner" />
        </div>
    </header>
    )
}

export default Header;