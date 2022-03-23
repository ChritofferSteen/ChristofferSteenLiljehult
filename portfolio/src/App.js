import React from "react";
import { Routes, Route } from "react-router-dom"
import NavBar from "./navbar";
import "./App.css"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { ProjectPage, ProjectPageText } from "./pages/ProjectPage";
import SemesterPage from "./pages/SemesterPage";
import Bravida from "./posts/project/bravida";
import Surfup from "./posts/project/surfup";
import Budweg from "./posts/project/budweg";
import Portfolio from "./posts/project/portfolio";
import Trævarefabrikernes from "./posts/project/trævarefabrikernes";

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
                        <Route path="trævarefabrikernes" element={<Trævarefabrikernes />} />
                    </Route>
                    <Route path="/4.Semester" element={<SemesterPage />} />
                </Routes>
            </div>
        </div>

    );
}

export default App;