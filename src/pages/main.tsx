import * as React from 'react';
import {FC, useState} from 'react';
import {Link} from "react-router-dom";


export const Main: FC = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <>
            <section className="mainScreen">
                <article className="mainScreenLeftSide">
                    <div>
                        <h1>NIKITA PAVLUSHIN</h1>
                        <h2>Привет, меня зовут <u>Никита</u>. Я Front-end разработчик</h2>
                        <div>
                            <Link to="/projectsInfo">
                                Projects
                                <svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L1 12M12 0V12M12 1H1" stroke="black" stroke-width="2"/>
                                </svg>

                            </Link>
                        </div>
                    </div>
                </article>
                <article>
                    {!isLoaded && <div className="skeleton" />}
                    <img onLoad={handleImageLoad} style={{ display: isLoaded ? 'block' : 'none' }} src="./images/mainScrean.svg" alt=""/>
                </article>
            </section>
        </>
    );
};