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
        </ul>
      </nav>
    </div>
    {/* //MenuHambur */}
    <aside className={menuOp ? "menu-open" : ""}>
    <MenuHambur data={data}/>
    </aside>
    </>
  );
}

export default Header;