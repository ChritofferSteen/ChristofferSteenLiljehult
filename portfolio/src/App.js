import React from "react";
import { Routes, Route } from "react-router-dom"
import NavBar from "./navbar";
import "./App.css"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { ProjectPage } from "./pages/ProjectPage";
import {SemesterPage  } from "./pages/SemesterPage";


function App() {
    return (
        <div className="App">
            <NavBar />
            <div id="page-body">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="omkring" element={<AboutPage />} />
                    <Route path="projekter/:project" element={<ProjectPage />}/>
                    <Route path="4.Semester/:week" element={<SemesterPage />}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;