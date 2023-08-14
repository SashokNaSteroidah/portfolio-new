import * as React from 'react';
import {FC} from 'react';
import {project} from "./ProjectsList";
import {ProjectSkills} from "./projectsAttr/ProjectSkills";
import {ProjectLink} from "./projectsAttr/projectLink";


export const ProjectItem: FC<project> = (props) => {
    const {links, skills} = props;
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
                {/* TODO: Нужно будет сделать еще картинки */}
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