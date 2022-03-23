import React from "react";
import { Outlet } from "react-router-dom"
import Navbarblog from "../posts/blog/navbarblog";

export function SemesterPage() {
    return (
        <>
            <Navbarblog />
            <div className="page-body-text">
                <Outlet />
            </div>
        </>
    );
}

export function SemesterPageText() {
    return (
        <>
            <h1>
                4.semester
            </h1>
            <p>
                Her inde står der ting omkring det jeg har lært om på 4.semester<br /><br />

                Jeg arbejder med frontend og databas<br /><br />

                Selve den her portfolio har jeg selv bygget op i React fra bunden af
            </p>
        </>
    );
}