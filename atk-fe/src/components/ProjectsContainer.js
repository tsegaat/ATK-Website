import React from "react"
import Project from './Project'

class ProjectsContainer extends React.Component {
    render(){
        return(
            <>
                <div className="w3-container w3-padding-32" id="projects">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
                </div>
            
                <div className="w3-row-padding">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Project name="Summer House" img="https://via.placeholder.com/100.png"/>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Project name="Brick House" img="https://via.placeholder.com/100.png"/>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Project name="Renovated" img="https://via.placeholder.com/100.png"/>    
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <Project name="Barn House" img="https://via.placeholder.com/100.png"/>
                    </div>
                </div>
            </>
            )
    }
}

export default ProjectsContainer;