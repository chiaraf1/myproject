import React from 'react'
import Desfiles from '../Components/Desfiles'
import dataDesfiles from '../dataDesfiles'

function Desfilespage() {
return (
    <div className='min-h-screen py-16 bg-gray-100'>
        <h1 className='text-5xl font-bold mb-16 text-center'>Desfiles Icónicos de los 90</h1>
        <div className='max-w-3xl mx-auto flex flex-col gap-16 px-4'>
            {dataDesfiles.map((desfile) => (
                <Desfiles key={desfile.id} desfile={desfile} />
            ))}
        </div>
    </div>
)
}

export default Desfilespage;