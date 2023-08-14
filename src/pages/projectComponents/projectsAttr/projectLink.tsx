import * as React from 'react';
import {FC} from 'react';
import {links} from "../ProjectsList";

interface ILinks {
  links: links[]
}

export const ProjectLink: FC<ILinks> = (props) => {
    return (
        <div className="ProjectLinks">
            {props.links.map(link => {
                return (
                    <a className="ProjectLink" href={link.url}>
                        <h3>{link.title}</h3>
                    </a>
                )
            })}
        </div>
    );
};