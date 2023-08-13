import * as React from 'react';
import {project, ProjectsList} from "./projectComponents/ProjectsList";

const projects: Array<project> = [
    {
        id: 1,
        year: 2019,
        title: 'Project 11231',
        description: "Просто проект",
        skills: ["html", "css", "JS"],
        links: [
            {title: "github", url: "https://vk.com"},
            {title: "github", url: "https://vk.com"}
        ]
    },
];

export const Projects = () => {
    return (
        <div className="projectsMenu">
            <div className="leftMenu">
                <h1>NIKITA PAVLUSHUN</h1>
            </div>
            <div className="rightMenu">
                <h1>Projects</h1>
                <ProjectsList projects={projects}/>
            </div>
        </div>
    );
};