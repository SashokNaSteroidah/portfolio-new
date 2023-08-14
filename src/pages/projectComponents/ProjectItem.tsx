import * as React from 'react';
import {FC} from 'react';
import {project} from "./ProjectsList";
import {ProjectSkills} from "./projectsAttr/ProjectSkills";
import {ProjectLink} from "./projectsAttr/projectLink";
import {ProjectImg} from "./projectsAttr/projectImg";

export const ProjectItem: FC<project> = (props) => {
    const {links, skills, img} = props;
    return (
        <section className="project">
            <article className="projectsTitles">
                <div className="ProjectTitle">
                    <p>{props.id}</p>
                    <span>{props.year}</span>
                </div>
                <div className="ProjectTitle">
                    <p>name</p>
                    <h2>
                        {props.title}
                    </h2>
                </div>
            </article>
            <article>
                <p>description</p>
                <span>{props.description}</span>
            </article>
            <article>
                <ProjectImg src={img}/>
            </article>
            <article>
                <ProjectSkills skills={skills}/>
            </article>
            <article>
                <ProjectLink links={links}/>
            </article>

        </section>
    );
};