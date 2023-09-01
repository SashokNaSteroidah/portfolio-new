import {project} from "../projectComponents/ProjectsList";

export const projectsInfo: Array<project> = [
    {
        id: 1,
        year: 2023,
        title: 'DEBETORUM',
        description: "Это проект, который должен из себя предстовлять конструктор документов для юридических лиц." +
            " В данном проекте я хочу совестить хороший дизайн, который будет удобен большей части пользователей. " +
            "По факту это мой первый проект на библиотеке React, который я делаю. По ссылке ниже вы можете ознакомиться с старым билдом без бекэнда",
        isFinish: false,
        skills: ["HTML", "SASS", "JS", "REACT", "REDUX", "TYPESCRIPT", "WEBPACK", "EXPRESS", "GIT", "DESIGN"],
        img: ["flalist/flalist1.png", "flalist/flalist2.png"],
        links: [
            {title: "desktop version", url: "http://s91026w9.beget.tech"},
            {title: "github", url: "https://github.com/SashokNaSteroidah/dock_contr"},
            {
                title: "figma",
                url: "https://www.figma.com/file/OBd8FN3L46Ye3RNRkl88Kh/docu?type=design&node-id=0%3A1&mode=design&t=zvxiNTLBpgfHHxWf-1"
            }
        ]
    },
    {
        id: 2,
        year: 2023,
        title: 'SITE-PORTFOlIO',
        description: "Ну и конечно, куда же без сайта, на котором вы сейчас сидите. Этот сайт был создан по причине устаревания прошлого проекта. " +
            "Я его хочу выполнить наиболее профисионально, множество функций еще сюда можно добавить, " +
            "но пока я все буду делать по этапам и выполнять рефакторинг при необходимости. Также осталю ссылочку для концептов, котороые были по ходу разработки",
        isFinish: false,
        skills: ["HTML", "SASS", "REACT", "TYPESCRIPT", "GIT", "WEBPACK", "DESIGNS"],
        img: ["flalist/flalist1.png", "flalist/flalist2.png"],
        links: [
            {title: "github", url: "https://github.com/SashokNaSteroidah/portfolio-new"},
            {title: "figma", url: "https://www.figma.com/file/3fJnZKmQpu8fQD6Iqr46zD/PortNew?type=design&node-id=0%3A1&mode=design&t=tQi45V4fzfd7dtW5-1"}
        ]
    }
];