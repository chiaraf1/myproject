import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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

  if (!post) return <div className="text-center p-6">Cargando post...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto object-cover rounded mb-6"
        />
      )}
      {post.video && (
  <div className="aspect-video mb-6">
    <iframe
      className="w-full h-full"
      src={post.video}
      title="Video del desfile"
      allowFullScreen
    ></iframe>
  </div>
)}
      <p className="text-gray-700 whitespace-pre-line mb-6">{post.desc}</p>
      <p className="text-sm text-gray-500">Categorías: {post.categories.join(", ")}</p>
    </div>
  );
}

export default Post;
