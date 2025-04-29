import React from 'react'
import { Link } from 'react-router-dom';

function MenuHambur({data, setMenuOp}) {
return (
    <>
    <nav className='p-4 w-64 bg-white h-full shadow-lg' > 
        <ul className='flex flex-col gap-4'>
        <li className='flex items-center gap-2 border-b border-gray-300 pb-2'>
        <input 
        type="text"
        placeholder='Search'
        className='w-ful outline-none placeholder:text-gray-500'/>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-5 h-5 text-gray-600"
        >
    <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
    />
</svg>
        </li>
        <li className='py-2 cursor-pointer'>
            <Link to="/" onClick={() => setMenuOp(false)}>Home</Link>
        </li>
        <li className='py-2 cursor-pointer'>
        <Link to="/desfiles"onClick={() => setMenuOp(false)}>Desfiles</Link>
        </li>
        <li className='py-2 cursor-pointer'>
        <Link to="/modelos"onClick={() => setMenuOp(false)}>Modelos</Link>
        </li>
        </ul>
    </nav>
    <div className='menu.content p-4'>
        
    </div>

</>
);
}

export default MenuHambur