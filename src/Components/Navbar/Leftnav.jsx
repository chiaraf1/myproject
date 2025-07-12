import React from "react";
import { Link } from "react-router-dom";
function Leftnav({ isOpen, closeMenu }) {
return (
    <div className={`nav-menu ${ isOpen ? "open" : ""}`}>
    <ul>
        <li>
        <Link to="/" onClick={closeMenu} className="hover:underline">
        Home
        </Link>
        </li>
        <li>
            <Link to="/modelos" onClick={closeMenu}>Modelos</Link>
        </li>
        <li>
            <Link to="/desfiles" onClick={closeMenu}>Desfiles</Link>
        </li>
    </ul>
    </div>
);
}

export default Leftnav;
