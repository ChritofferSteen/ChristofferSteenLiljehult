import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects.json";

function Navbarproject() {
    return (
        <div className="navbar">
            <ul>
                {Projects.projects.map(x => {
                    return(
                        <li>
                            <Link to={`/projekter/${x.title}`}>{x.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Navbarproject;