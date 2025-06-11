import React, { useEffect, useState } from 'react';
import Desfiles from '../Components/DesfilesCard';


function Desfilespage() {
    const [desfiles, setDesfiles] = useState ([]);

        useEffect (() => {
            // fetch('http://localhost:5001/api/desfiles')
            fetch(`${import.meta.env.VITE_API_URL}/desfiles`)
            .then(res => res.json())
            .then(data => setDesfiles(data))
            .catch(err => console.error("Error al cargar los desfiles:", err));
        }, []);
    
return (
    <div className='min-h-screen py-16 bg-gray-100'>
        <h1 className='text-5xl font-bold mb-16 text-center'>Desfiles Icónicos de los 90</h1>
        <div className='max-w-3xl mx-auto flex flex-col gap-16 px-4'>
            {desfiles.map((desfile) => (
                <Desfiles key={desfile._id} desfile={desfile} />
            ))}
        </div>
    </div>
)
}

export default Desfilespage;