import * as React from 'react';
import {FC} from "react";
import {ProjectCheckBox} from "./projectCheckBox";

interface ISortProps {
    sortItem: string[]
}

export const ProjectSortList: FC<ISortProps> = (sortAttr) => {
    return (
        <div>
            {sortAttr.sortItem.map((item, index) => {
                return <ProjectCheckBox key={index} title={item}></ProjectCheckBox>
            })}
        </div>
    );
};