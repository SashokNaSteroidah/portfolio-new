import * as React from 'react';
import {FC, useState} from 'react';

interface buttonProps {
    title: string
}

export const ProjectCheckBox: FC<buttonProps> = (buttonProps) => {
    const [check, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!check);
    }

    return (
        <div>
            <input
                type="checkbox"
                onChange={handleCheck}
                checked ={check}
            />

            <button onClick={handleCheck}>
                {buttonProps.title}
            </button>

            {check && <p>{buttonProps.title}</p>}
        </div>
    );
};
