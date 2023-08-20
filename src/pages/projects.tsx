import * as React from 'react';
import {ProjectsList} from "./projectComponents/ProjectsList";
import {projectsInfo} from "./projects/projectsInfo";
import {ProjectSortList} from "./projectComponents/projectSort/ProjectSortList";


export const Projects = () => {
    return (
        <div className="projectsMenu">
            <div className="leftMenu">
                <h1>NIKITA PAVLUSHUN</h1>
                <ProjectSortList sortItem={[...new Set(projectsInfo.map(project => project.skills).flat())]}/>
            </div>
            <div className="rightMenu">
                <h1 className="title">PROJECTS</h1>
                <ProjectsList projects={projectsInfo}/>
            </div>
        </div>
    );
};