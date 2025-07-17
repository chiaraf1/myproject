import React, { useEffect, useState } from "react";
import axios from "axios";
import PostComp from "../Components/PostComp";

function Home() {
  const [curiosidades, setCuriosidades] = useState([]);
  const [trends, setTrends] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/posts`).then((res) => {
      console.log("Datos recibidos:", res.data);
      const data = Array.isArray(res.data) ? res.data : res.data.posts || [];

      // Filtrar por categoría
      setCuriosidades(data.filter((p) => p.categories.includes("curiosidades")));
      setTrends(data.filter((p) => p.categories.includes("trends")));
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20 font-serif text-gray-900">
      <div>
        <h2 className="text-5xl font-bold mb-10 uppercase tracking-wider text-center border-b pb-4">
          Curiosidades
          </h2>
        {curiosidades.length === 0 ? (
          <p className="text-gray-600 text-center italic" >No hay curiosidades aún.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
          {curiosidades.map((post) => (
            <PostComp key={post._id} post={post} />
        ))}
      </div>
  )}
  </div>
  

      <div>
      <h2 className="text-5xl font-bold mb-10 uppercase tracking-wider text-center border-b pb-4">
        Trends 
        </h2>
        {trends.length === 0 ? (
          <p className="text-gray-600 text-center italic">No hay trends aún.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
          {trends.map((post) => (
            <PostComp key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  </div>
);
}

export default Home;
