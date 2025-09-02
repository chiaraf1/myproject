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
    <div className="max-w-3xl mx-auto p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-4xl font-serif italic mb-8">{post.title}</h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-w-[600px] h-auto object-cover rounded-lg shadow-md mb-8"
        />
      )}

      {/* video separado de la imagen */}
      {post.video && (
      <div className="w-full max-w-[600px] aspect-video mb-8">
      <iframe
      className="w-full h-full rounded-lg shadow-md"
      src={post.video}
      title="Video del desfile"
      allowFullScreen
    ></iframe>
  </div>
)}

      <p className="text-gray-700 text-base leading-relaxed max-w-prose mb-8 whitespace-pre-line">{post.desc}</p>
      <p className="text-sm text-gray-500 tracking-wide uppercase">Categorías: {post.categories.join(", ")}</p>
    </div>
  );
}

export default Post;
