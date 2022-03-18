import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Hjem</Link>
            </li>
            {/* <li>
                <Link to="omkring">Om mig</Link>
            </li>
            <li>
                <Link to="projekt">Projekter</Link>
            </li>
            <li>
                <Link to="4.semester">4.semester</Link>
            </li> */}
        </ul>
    </nav>
)
export default NavBar;
