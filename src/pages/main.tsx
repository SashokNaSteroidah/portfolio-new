import * as React from 'react';
import {FC} from "react";

export const Main: FC = () => {
    return (
        <section className="mainScreen">
            <article className="mainScreenLeftSide">
                <div>
                    <h1>NIKITA PAVLUSHIN</h1>
                    <h2>Привет, меня зовут <u>Никита</u>. Я Front-end разработчик</h2>
                    <div>
                        <a href="#">Projects</a>
                        <a href="#">Solo Projects</a>
                    </div>
                </div>
            </article>
            <article>
                <img src="./images/mainScrean.svg" alt="" />
            </article>
        </section>
    );
};