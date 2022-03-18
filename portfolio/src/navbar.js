import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg"

function NavBar() {
    return (
        <nav>
            <ul>
                <li className="left">
                    <Link to={"/"}>Hjem</Link>
                </li>
                <li>
                    <Link to={"/projekter"}>Projekter</Link>
                </li>
                <li>
                    <Link to={"/4.Semester"}>4.Semester</Link>
                </li>
                <li>
                    <Link to={"/omkring"}>Om mig</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;
