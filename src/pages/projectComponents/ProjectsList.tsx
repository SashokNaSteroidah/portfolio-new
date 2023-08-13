import * as React from 'react';
import {FC} from 'react';
import {ProjectItem} from "./ProjectItem";

export interface project {
    id: number,
    year: number,
    title: string,
    description: string,
    skills: string[],
    links: links[]
}

export interface links {
    title: string,
    url: string
}

interface IProjectsListProps {
    projects: project[]
}

export const ProjectsList: FC<IProjectsListProps> = ({projects}) => {
    return (
        <div>
            {projects.map(project => (
                <ProjectItem key={project.id}
                             title={project.title}
                             description={project.description}
                             id={project.id}
                             links={project.links}
                             skills={project.skills}
                             year={project.year}/>
            ))}
        </div>
    );
};