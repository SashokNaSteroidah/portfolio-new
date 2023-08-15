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
                    <span>{`0${props.id}`}</span>
                    <p>{props.year}</p>
                </div>
                <div className="ProjectTitle">
                    <span>name</span>
                    <p>
                        {props.title}
                    </p>
                </div>
            </article>
            <article className="ProjectDes">
                <p className="projectAttr">description</p>
                <p>{props.description}</p>
            </article>
            <article>
                <ProjectImg src={img}/>
            </article>
            <article>
                <p className="projectAttr">skills</p>
                <ProjectSkills skills={skills}/>
            </article>
            <article>
                <p className="projectAttr">links</p>
                <ProjectLink links={links}/>
            </article>

        </section>
    );
};