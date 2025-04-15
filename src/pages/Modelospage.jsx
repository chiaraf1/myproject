import React from 'react'
import Modelos from './Modelos'
import data from '../data'

function Modelospage() {
return (
    <div className='p-4 bg-white text-black'>
        <h1 className='text-2xl font-bold mb-4'>Modelos</h1>
        <div className='grid gap-4'>
            {data.map((modelo) => (
                <Modelos key={modelo.id} modelos={modelo} />
            ))}
        </div>
    </div>
)
}

export default Modelospage