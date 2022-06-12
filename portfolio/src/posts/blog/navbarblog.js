import React from "react";
import { Link } from "react-router-dom";
import Weeks from "./Weeks.json"

function Navbarblog() {
    return (
        <div className="navbar">
            <ul>
                {Weeks.weeks.map(x => {
                    return (
                        <li>
                            <Link to={`/4.Semester/${x.number}`}>Uge {x.number}: {x.date}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Navbarblog;