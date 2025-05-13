// src/Pages/Modelospage.jsx
import React, { useEffect, useState } from 'react';
import ModeloCard from '../Components/ModeloCard';


function Modelospage() {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/modelos')
      .then(res => res.json())
      .then(data => setModelos(data))
      .catch(err => console.error("Error al cargar modelos:", err));
  }, []);

  return (
    <div className="p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Modelos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {modelos.map((modelo) => (
          <ModeloCard key={modelo._id} modelo={modelo} />
        ))}
      </div>
    </div>
  );
}

export default Modelospage;
