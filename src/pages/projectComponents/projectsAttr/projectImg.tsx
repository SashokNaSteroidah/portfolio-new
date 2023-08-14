import * as React from 'react';
import {FC} from 'react';

interface IProjectImages {
    src: string[]
}

export const ProjectImg: FC<IProjectImages> = (images) => {
    return (
        <div>
            {images.src.map(image => {
                return (
                    <img src={image} alt=""/>
                )
            })}
        </div>
    );
};