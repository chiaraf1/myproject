import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './post.css'

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => {
        alert("Post no encontrado");
        navigate("/");
      });
  }, [id]);

  if (!post) return  <div className="loading-container">
  Cargando post...
</div>

  return (
    <article className="post-container">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
        </header>

        <div className="post-media">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="post-image"
            />
          )}

          {post.video && (
            <div className="post-video-container">
              <iframe
                className="post-video"
                src={post.video}
                title="Video del desfile"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <div className="post-content">
          <p className="post-description">{post.desc}</p>
        </div>

        <footer className="post-meta">
          <p className="post-categories">
            Categorías: {post.categories.join(", ")}
          </p>
        </footer>
      </article>
  );
}

export default Post;