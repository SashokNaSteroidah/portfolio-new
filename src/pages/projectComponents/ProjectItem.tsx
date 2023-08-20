import * as React from 'react';
import {FC} from 'react';
import {project} from "./ProjectsList";
import {ProjectSkills} from "./projectsAttr/ProjectSkills";
import {ProjectLink} from "./projectsAttr/projectLink";
import {ProjectImg} from "./projectsAttr/projectImg";

export const ProjectItem: FC<project> = (props) => {
    const {links, skills, img} = props;
    let idCheck: boolean = false
    if (props.id === 1) {
        idCheck = true
    }
    return (
        <section className="project">
            {idCheck ? null : <hr/>}
            <article className="projectsTitles">
                <div className="ProjectTitle">
                    <p className="projectAttr">{`0${props.id}`}</p>
                    <p>{props.year}</p>
                </div>
                <div className="ProjectTitle">
                    <p className="projectAttr">name</p>
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