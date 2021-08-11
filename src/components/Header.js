import React from 'react';
import bannerLogo from '../assets/banner.png'

const Header = () => {
    return (
    <header className="w3-display-container w3-content w3-wide" style={{"maxWidth": "1500px"}} id="home">
        <img className="w3-image" src="https://via.placeholder.com/1500x800.png?text=_" alt="Architecture" width="1500" height="800"/>
        <div className="w3-display-middle w3-margin-top w3-center">
          <span className="w3-padding"><img className="header-img" src={bannerLogo} alt="Atk Banner" /></span>
        </div>
    </header>
    )
}

export default Header;