import React from "react"
import Service from './Service'

class ServiceContainer extends React.Component {
    render(){
        return(
            <>
                <div className="w3-container w3-padding-32" id="service">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            
                <div className="w3-row-padding">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Service name="Building" img="https://via.placeholder.com/100.png" 
                            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."/>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Service name="Consulting" img="https://via.placeholder.com/100.png" 
                            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."/>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Service name="Architecture" img="https://via.placeholder.com/100.png" 
                            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."/>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Service name="Finishing" img="https://via.placeholder.com/100.png" 
                            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."/>
                    </div>
                </div>
            </>
            )
    }
}

export default ServiceContainer;