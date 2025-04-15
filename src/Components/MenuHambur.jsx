import React from 'react'
import { Link } from 'react-router-dom';

function MenuHambur({data}) {
return (
    <>
    <nav>
        <ul>
        <li className='py-2'>
        <input type="text"
        placeholder='Search'
        className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%]
        md:pr-6 rounded-full placeholder:text-dark-grey'  />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
        </li>
        <li className='py-2 cursor-pointer'>
        <Link to="/desfiles">Desfiles</Link>
        </li>
        <li className='py-2 cursor-pointer'>
        <Link to="/modelos">Modelos</Link>
        </li>
        </ul>
    </nav>
    <div className='menu.content p-4'>
        
    </div>

</>
);
}

export default MenuHambur