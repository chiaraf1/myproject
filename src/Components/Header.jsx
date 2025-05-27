import React, { useState } from 'react'
import myProjectImage from '../assets/myproject.png'
import { Bars3Icon } from "@heroicons/react/24/outline";
import MenuHambur from './MenuHambur';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/usuarios/usuariosSlice';



const Header = () => {
  const [menuOp, setMenuOp] = useState(false);
  const isAuthenticated = useSelector(
  (state) => state.usuarios.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("isAuthenticated:", isAuthenticated);

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
        <ul className='flex gap-4'>
          {!isAuthenticated && (
            <>
          {/*Sign in dere */}
          <li className='text-gray-700'>
            <Link to="/login">Sign in</Link> 
            </li>
            <li className='text-gray-700'>
              <Link to="/register">Register</Link>
              </li>
              </>
    )}
    {isAuthenticated && (
      <>
      <li className='text-gray-700'>
        <Link to="/perfil">Perfil</Link>
      </li>
      <li className='text-gray-700'>
        <button onClick={() => {
          dispatch(logout());
          navigate("/");
        }}>
          Logout</button>
      </li>
      </>
    )}
  </ul>
  
      </nav>
    </div>
    {/* //MenuHambur */}
    <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOp ? 'translate-x-0' : '-translate-x-full'}`}>
    <MenuHambur setMenuOp={setMenuOp}/>
    </aside>
    </>
  );
}


export default Header;