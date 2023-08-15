import * as React from 'react';
import {ProjectsList} from "./projectComponents/ProjectsList";
import {projectsInfo} from "./projects/projectsInfo";

export const Projects = () => {
    return (
        <div className="projectsMenu">
            <div className="leftMenu">
                <h1>NIKITA PAVLUSHUN</h1>
            </div>
            <div className="rightMenu">
                <h1 className="title">PROJECTS</h1>
                <ProjectsList projects={projectsInfo}/>
            </div>
        </div>
    );
};