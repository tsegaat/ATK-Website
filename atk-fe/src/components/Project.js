import React from 'react';

const Employees = ({name, img}) => {
    return(
        <div className="w3-display-container w3-darken-img">       
            <div className="w3-display-topleft w3-black w3-padding project-name">{name}</div>
            <div className="w3-display-middle project-description">Phasellus eget enim eu lectus faucibus vestibulum.</div>
            <div className="dark-bg"></div>
            <img src={img} alt="House" style={{"width": "100%"}}/>

        </div>
    )
}

export default Employees;