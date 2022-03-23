import React from "react";
import { Outlet } from "react-router-dom"
import Navbarproject from "../posts/project/navbarproject";

export function ProjectPage() {
    return (
        <>
            <Navbarproject />
            <div className="page-body-text">
                <Outlet />
            </div>
        </>
    );
}

export function ProjectPageText() {
    return (
        <>
            <h1>
                Projekter
            </h1>
            <p>
                Her er der beskrivelser af de projekter jeg har lavet gennem tiden
            </p>
        </>
    );
}


