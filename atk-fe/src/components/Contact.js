import React from 'react';
import Form from "./Form"

const Contact = () => {
    return (
        <>
            <div className="contact-map-col-2">
                <div className="w3-container w3-padding-32">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
                    <p>Lets get in touch and talk about our next project.</p>
                    <Form />
                </div>
                <div>
                    <iframe className="iframe-map" title="ATK Map View" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=century%20mall%20&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>       
                
            </div>
        </>   
    )
}

export default Contact;