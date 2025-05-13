// src/Components/ModeloCard.jsx
import React from 'react';

function ModeloCard({ modelo }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">{modelo.nombre}</h2>
      <img
        src={modelo.img.src} 
        alt={modelo.img.alt}
        className="w-full h-auto my-2"
      />
      <p><strong>Descripción:</strong> {modelo.description}</p>
      <p><strong>Texto:</strong> {modelo.text}</p>
      <p><strong>Altura:</strong> {modelo.altura} cm</p>
      <p><strong>Medidas:</strong> {modelo.medidas.join(', ')}</p>
    </div>
  );
}

export default ModeloCard;
