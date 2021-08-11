import React from 'react';

const Service = ({name, img, description}) => {
    return(
        <>
            {/* Employee photo */}
            <img src={img} alt={name.split(" ")[0]} style={{"width":"100%"}}/>
            {/* Employee name */}
            <h3 style={{"text-align": "center"}}>{name}</h3>
            {/* Employee description */}
            <p>{description}</p>
        </>
    )
}

export default Service;