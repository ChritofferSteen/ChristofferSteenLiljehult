import React from "react";
import { Link } from "react-router-dom";

function Navbarblog() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to={"/4.semester/uge1"}>Uge 1</Link>
                </li>
                <li>
                    <Link to={"/4.semester/uge2"}>Uge 2</Link>
                </li>
                <li>
                    <Link to={"/4.semester/uge3"}>Uge 3</Link>
                </li>
                <li>
                    <Link to={"/4.semester/uge4"}>Uge 4</Link>
                </li>
                <li>
                    <Link to={"/4.semester/uge5"}>Uge 5</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbarblog;