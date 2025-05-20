import React from "react";

export default function DesfilesCard ({desfile}) {

  return (
    
  <article className="mb-12 max-w-xl mx-auto bg-white p-6 rounded-x1 shadow-lg flex flex-col items-center">
              <div className="w-full rounded-lg overflow-hidden mb-4">
              <iframe
              src={desfile.videoUrl} 
              title={desfile.nombre} 
              style={{border: "none"}}
              allow="accelerometer; autoplay; clipboard-write; ecrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-64"
              ></iframe>
  </div>

  <div className="text-center"> 
      <h2 className="desfile-nombre text-x2 font-bold mb-2">{desfile.nombre}</h2>
      <p className="desfile-año text-gray-600 mb-1">{desfile.año}</p>
      <p className="desfile-diseñador text-gray-800 mb-2">{desfile.diseñador}</p>
      <p className="desfile-descripción text-gray-700">{desfile.descripción}</p>
  </div>
  </article>
  )
}