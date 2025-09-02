import React, { useEffect, useState } from "react";
import axios from "axios";
import PostComp from "../../Components/Postcomp/PostComp";
import './home.css';

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
    <div className="main-content">
      {/* Sección: Curiosidades */}
      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Curiosidades</h2>
          <p className="section-subtitle">Secretos y anécdotas del mundo fashion</p>
        </header>
        
        {curiosidades.length === 0 ? (
          <div className="empty-state">
            <p className="empty-message">No hay curiosidades aún.</p>
          </div>
        ) : (
          <div className="posts-grid">
            {curiosidades.map((post) => (
              <PostComp key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* Sección: Trends */}
      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Trends</h2>
          <p className="section-subtitle">Las tendencias que están marcando época</p>
        </header>
        
        {trends.length === 0 ? (
          <div className="empty-state">
            <p className="empty-message">No hay trends aún.</p>
          </div>
        ) : (
          <div className="posts-grid">
            {trends.map((post) => (
              <PostComp key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
);
}

export default Home;
