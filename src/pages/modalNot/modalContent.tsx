import * as React from 'react';
import {FC} from "react";

interface ImodalContent {
    title: string
}

export const ModalContent: FC<ImodalContent> = (props) => {
    return (
        <div>
            {props.title}
        </div>
    );
};