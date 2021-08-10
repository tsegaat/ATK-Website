import React from 'react';

const Employees = ({name, img}) => {
    return(
        <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">{name}</div>
            <img src={img} alt="House" style={{width: "100%"}}/>
        </div>
    )
}

export default Employees;