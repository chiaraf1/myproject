import React from "react";
import { Link } from "react-router-dom";
import Burger from "../Navbar/Burger";

const Navbar = () => {
return (
    <header className="navbar-container">
<div className="navbar-inner">

    {/* Izquierda: Burger */}
    <div className="navbar-section">
    <Burger />
    </div>

    {/* Centro: Logo */}
    <div className="navbar-logo text-4xl font-serif font-bold uppercase tracking-wide">
    <Link to="/">CHIARISSIME</Link>
    </div>

    {/* Derecha: Links */}
    <div className="navbar-section navbar-links">
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    </div>

</div>
</header>
)};

export default Navbar;
