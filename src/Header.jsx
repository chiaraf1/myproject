import React, { useState } from 'react'
import myProjectImage from './assets/myproject.png'
import { Bars3Icon } from "@heroicons/react/24/outline";

export const Header = () => {
  const [menuOp, setMenuOp] = useState(false);
  return (
    <>
    <div className='header-container bg-white w-screen sticky z-30 top-0 px-7 h-20 flex items-center justify-around shadow-md'>
  <button className='menu-boton flex justify-start' onClick={() => setMenuOp(!menuOp)}>
    <Bars3Icon className='w-6 h-6' />
    Menu
</button>
      <img src={myProjectImage} alt="logotemporary" className='mx-auto h-10 justify-center'/> 
      <nav>
        <ul>
          <li className='text-gray-700 flex justify-end'>Sign in</li>
        </ul>
      </nav>
    </div>
    <aside className={`${menuOp ? "block" : "hidden"}`}>
      <nav>
        <ul>
          <li className='py-2'>
        Buscar
        </li>
          <li className='py-2'>Desfiles</li>
          <li className='py-2'>Modelos</li>
        </ul>
      </nav>
    </aside>
    </>
  )
}
