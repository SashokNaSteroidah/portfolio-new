import * as React from 'react';
import {FC} from 'react';
// import {ModalContent} from "./modalContent";

interface IModal {
    active: boolean,
    setActive: (active: boolean) => void
}

export const Modal: FC<IModal> = ({active, setActive}) => {
    return (
        <div className="modal">
            {/*<div className="modalContent">*/}
            {/*    <ModalContent title={"хехе"}/>*/}
            {/*</div>*/}
        </div>
    );
};