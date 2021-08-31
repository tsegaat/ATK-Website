import React from "react"
import Employees from './Employees'
import amtk from '../assets/amanuel_tesh.jpg'

class AboutContainer extends React.Component {
    render(){
        return(
            <>
                <div className="w3-container w3-padding-32" id="about">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
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
                        <Employees name="Amanuel Teshome" img={amtk}
                            title="CEO & Founder" 
                            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."/>

                        <p><a href="#contact"><button className="w3-button w3-light-grey w3-block" >Contact</button></a></p>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Employees name="Jane Doe" img="https://via.placeholder.com/100.png" 
                            title="Architect" 
                            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."/>
                            
                        <p><a href="#contact"><button className="w3-button w3-light-grey w3-block">Contact</button></a></p>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Employees name="Mike Ross" img="https://via.placeholder.com/100.png" 
                            title="Architect" 
                            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."/>
                            
                        <p><a href="#contact"><button className="w3-button w3-light-grey w3-block">Contact</button></a></p>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Employees name="Dan Star" img="https://via.placeholder.com/100.png" 
                            title="Architect" 
                            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."/>
                            
                        <p><a href="#contact"><button className="w3-button w3-light-grey w3-block">Contact</button></a></p>
                    </div>
                </div>
            </>
            )
    }
}

export default AboutContainer;