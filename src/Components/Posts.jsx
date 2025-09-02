import React, { useEffect, useState } from "react";
import axios from "axios";
import PostComp from "../Components/Postcomp/PostComp"; // cada post individual
import './postsc.css';

function Posts({ category }) {
const [posts, setPosts] = useState([]);
const API_URL = import.meta.env.VITE_API_URL;

useEffect(() => {
    const fetchPosts = async () => {
    try {
        const res = await axios.get(`${API_URL}/posts`);
        const filtered = category
        ? res.data.filter((p) => p.categories.includes(category))
        : res.data;
        setPosts(filtered);
    } catch (error) {
        console.error("Error al cargar posts:", error);
    }
    };

    fetchPosts();
}, [category]);

return (
    <div className="posts-container">
        {posts.length === 0 ? (
          <div className="empty-state">
            <p className="empty-message">No hay posts disponibles.</p>
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostComp key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
  );
}

export default Posts;
