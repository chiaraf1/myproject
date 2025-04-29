import React, { useState } from 'react'
import myProjectImage from '../assets/myproject.png'
import { Bars3Icon } from "@heroicons/react/24/outline";
import data from '../data'
import MenuHambur from './MenuHambur';
import { Link } from 'react-router-dom';



const Header = () => {
  const [menuOp, setMenuOp] = useState(false);

  return (
    <>
    <div className='header-container'>
      {/*Boton del menu */}
  <button className='menu-boton flex items-center gap-1' onClick={() => setMenuOp(!menuOp)}>
    <Bars3Icon className='w-6 h-6' />
    <span>Menu</span>
</button>
      {/*Logo centro*/}
      <Link to="/">
      <img src={myProjectImage} alt="logotemporary" className='mx-auto h-10'/> 
      </Link>
      <nav>
        <ul>
          {/*Sign in dere */}
          <li className='text-gray-700'>
            <Link to="/login">Sign in</Link> 
            </li>
            <li className='text-gray-700'>
              <Link to="/register">Register</Link>
            </li>
        </ul>
      </nav>
    </div>
    {/* //MenuHambur */}
    <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOp ? 'translate-x-0' : '-translate-x-full'}`}>
    <MenuHambur data={data} setMenuOp={setMenuOp}/>
    </aside>
    </>
  );
}

export default Header;