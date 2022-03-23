import React from "react";
import { Routes, Route } from "react-router-dom"
import NavBar from "./navbar";
import "./App.css"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { ProjectPage, ProjectPageText } from "./pages/ProjectPage";
import {SemesterPage, SemesterPageText } from "./pages/SemesterPage";
import Bravida from "./posts/project/bravida";
import Surfup from "./posts/project/surfup";
import Budweg from "./posts/project/budweg";
import Portfolio from "./posts/project/portfolio";
import Trævarefabrikernes from "./posts/project/trævarefabrikernes";
import Week1 from "./posts/blog/week1";
import Week5 from "./posts/blog/week5";
import Week2 from "./posts/blog/week2";
import Week3 from "./posts/blog/week3";
import Week4 from "./posts/blog/week4";

function App() {
    return (
        <div className="App">
            <NavBar />
            <div id="page-body">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/omkring" element={<AboutPage />} />
                    <Route path="/projekter" element={<ProjectPage />}>
                        <Route path="" element={<ProjectPageText />} />
                        <Route path="bravida" element={<Bravida />} />
                        <Route path="surfup" element={<Surfup />} />
                        <Route path="budweg" element={<Budweg />} />
                        <Route path="portfolio" element={<Portfolio />} />
                        <Route path="traevarefabrikernes" element={<Trævarefabrikernes />} />
                    </Route>
                    <Route path="/4.Semester" element={<SemesterPage />}>
                        <Route path="" element={<SemesterPageText/>}/>
                        <Route path="uge1" element={<Week1/>}/>
                        <Route path="uge2" element={<Week2/>}/>
                        <Route path="uge3" element={<Week3/>}/>
                        <Route path="uge4" element={<Week4/>}/>
                        <Route path="uge5" element={<Week5/>}/>
                    </Route>
                </Routes>
            </div>
        </div>

    );
}

export default App;