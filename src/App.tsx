import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/main";
import {Projects} from "./pages/projects";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/projectsInfo" element={<Projects/>}/>
        </Routes>
    );
}

export default App;