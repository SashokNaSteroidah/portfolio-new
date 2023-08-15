import * as React from 'react';
import {FC} from 'react';
import {links} from "../ProjectsList";

interface ILinks {
  links: links[]
}

export const ProjectLink: FC<ILinks> = (props) => {
    return (
        <div className="ProjectLinks">
            {props.links.map((link, index) => {
                return (
                    <a key={index} className="ProjectLink" href={link.url}>
                        <p>{link.title}</p>
                    </a>
                )
            })}
        </div>
    );
};