import React from 'react';

const Service = ({name, img, description}) => {
    return(
        <>
            {/* Service photo */}
            <img src={img} alt={name.split(" ")[0]} style={{"width":"100%"}}/>
            {/* Service name */}
            <h3 className="w3-center w3-text-underline" style={{"marginTop": "10px"}}>{name}</h3>
            {/* Service description */}
            <p>{description}</p>
        </>
    )
}

export default Service;