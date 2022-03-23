import React from "react";
import { Link } from "react-router-dom";

function Navbarproject() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to={"/projekter/bravida"}>Bravida</Link>
                </li>
                <li>
                    <Link to={"/projekter/surfup"}>Surfup</Link>
                </li>
                <li>
                    <Link to={"/projekter/budweg"}>Budweg</Link>
                </li>
                <li>
                    <Link to={"/projekter/portfolio"}>Portfolio</Link>
                </li>
                <li>
                    <Link to={"/projekter/trævarefabrikernes"}>Trævarefabrikernes</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbarproject;