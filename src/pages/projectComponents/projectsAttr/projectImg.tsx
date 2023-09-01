import * as React from 'react';
import {FC} from 'react';

interface IProjectImages {
    src: string[]
}

export const ProjectImg: FC<IProjectImages> = (images) => {
    return (
        <div className="projectImg">
            {images.src.map((image, index) => {
                return (
                    <img key={index} src={`./images/projects/${image}`} alt=""/>
                )
            })}
        </div>
    );
};