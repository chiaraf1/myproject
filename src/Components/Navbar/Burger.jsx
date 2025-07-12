import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import Leftnav from "../Navbar/Leftnav";

function Burger() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);
const closeMenu = () => setIsOpen(false);  //p cerrar el menu

return (
    <>
    <div className="burger-icon" onClick={toggleMenu}>
        {isOpen ? <MdMenuOpen size={30} /> : <IoMenu size={30} />}
    </div>
    <Leftnav isOpen={isOpen} closeMenu={closeMenu} />
    </>
);
}

export default Burger;
