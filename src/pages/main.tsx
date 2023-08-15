import * as React from 'react';
import {FC} from 'react';
import {Link} from "react-router-dom";


export const Main: FC = () => {
    // const [modalActive, setModalActive] = useState(true)
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
                            </Link>
                            <Link to="#">Solo Projects</Link>
                        </div>
                    </div>
                </article>
                <article>
                    <img src="./images/mainScrean.svg" alt=""/>
                </article>
            </section>
        </>
    );
};