import React from "react";
import Burger from "../Navbar/Burger";
import { Link } from "react-router-dom"

const Navbar = () => {
return (
    <nav className="navbar">
    <div className="navbar-left">Nav bar
    <Burger />
    </div>
    
    <div className="navbar-center">
        <div className="logo">ProjectChi</div>
    </div>

    <div className="navbar-right">
        <Link to="/register" className="text-sm hover:underline">Register</Link>
        <Link to="/login" className="text-sm hover:underline">Login</Link>
    </div>
    </nav>
);
};

export default Navbar;

