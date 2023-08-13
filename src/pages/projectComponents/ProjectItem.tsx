import * as React from 'react';
import {FC} from 'react';
import {project} from "./ProjectsList";


export const ProjectItem: FC<project> = (props) => {
    const {links, skills} = props;
    return (
        <section>
            <article className="projectsNames">
                <div>
                    <span>{props.id}</span>
                    <span>{props.year}</span>
                </div>
                <div>
                    <span>name</span>
                    <h2>
                        {props.title}
                    </h2>
                </div>
            </article>
            <article>
                <span>description</span>
                <p>{props.description}</p>
            </article>
            <article>
                {/* TODO: Нужно будет сделать еще картинки */}
            </article>
            <article>

            </article>
            {`${props.title} ${props.year} ${props.description}${props.id}`}
            {skills.map(skill => (
                <h1>{skill}</h1>
            ))}
            {links.map(link => {
                return (
                    <a href={link.url}>
                        <h3>{link.title}</h3>
                    </a>
                );
            })}

        </section>
    );
};