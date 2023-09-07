import * as React from 'react';
import {useState} from 'react';
import {project, ProjectsList} from "./projectComponents/ProjectsList";
import {projectsInfo} from "./projects/projectsInfo";
import {projectsInfoStydy} from "./projects/projectsInfoStudy";
import {Link} from "react-router-dom";


export const Projects = () => {

    const [project, setProject] = useState(projectsInfo)
    const [projectName, setProjectName] = useState("PROJECTS")

    const handleChange = (array: project[], name: string) => {
        setProject(array)
        setProjectName(name)
    }

    return (
        <div className="projectsMenu">
            <div className="leftMenu">
                <article>
                    <section>
                        <Link to={"/"}>
                            <h1>NIKITA PAVLUSHUN</h1>
                        </Link>
                        {/*{<ProjectSortList sortItem={[...new Set(projectsInfo.map(project => project.skills).flat())]}/>}*/}
                        <div className="buttonChangeMenu">
                            <div>
                                <button onClick={() => handleChange(projectsInfo, "PET PROJECTS")}>Пэт-проекты</button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                     id="left-arrow-backward-sign"
                                     version="1.1" viewBox="0 0 15.699 8.707" xmlSpace="preserve">
                                    <polygon
                                        points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/>
                                </svg>
                            </div>
                            <div>
                                <button onClick={() => handleChange(projectsInfoStydy, "STUDY PROJECTS")}>Учебные проекты
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                     id="left-arrow-backward-sign"
                                     version="1.1" viewBox="0 0 15.699 8.707" xmlSpace="preserve">
                                    <polygon
                                        points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/>
                                </svg>
                            </div>
                        </div>
                    </section>
                    <section className="contacts">
                        <a href="mailto:pavliushin.nikita@mail.ru">EMAIL</a>
                        <a href="https://github.com/SashokNaSteroidah" target="_blank">GITHUB</a>
                        <a href="https://hh.ru/resume/77cb5c69ff081647080039ed1f4a6374516536" target="_blank">HEADHUNTER</a>
                    </section>
                </article>
                <div className=""></div>
            </div>
            <div className="rightMenu">
                <h1 className="title">{projectName}</h1>
                <ProjectsList projects={project}/>
            </div>
        </div>
    );
};