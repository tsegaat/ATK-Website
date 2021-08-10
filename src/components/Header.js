import React from 'react';

const Header = () => {
    return (
    <header className="w3-display-container w3-content w3-wide" style={{"max-width": "1500px"}} id="home">
        <img className="w3-image" src="https://via.placeholder.com/1500x800.png" alt="Architecture" width="1500" height="800"/>
        <div className="w3-display-middle w3-margin-top w3-center">
          <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>ATK</b></span></h1>
        </div>
    </header>
    )
}

export default Header;