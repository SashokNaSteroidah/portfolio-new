import * as React from 'react';
import {FC} from "react";

interface ISkills {
    skills: string[]
}

export const ProjectSkills: FC<ISkills> = (skills) => {
    return (
        <div className="projectsSkills">
            {skills.skills.map((skill, index) => {
                return (
                    <p key={index} className="projectsSkill">{skill}</p>
                )
            })}
        </div>
    );
};