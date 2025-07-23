import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ 
    title: "", 
    desc: "", 
    image: "", 
    categories: [""] 
  });
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios.get(`${API_URL}/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "categories"){
      setPost((prev) => ({ ...prev, [name]: value }));
    } else {
      setPost({ ...post, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    
    try{ 
      const postToSend = {
        ...post,
        categories: post.categories ? [post.categories] : [],
      };

    await axios.put(`${API_URL}/posts/${id}`, postToSend, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    alert("Post actualizado");
    navigate("/admin");
  } catch (err) {
    console.error("Error al editar post:", err.response?.data || err.message);
    alert("No se pudo actualizar el post");
  }
};

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Editar Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
        type="text" 
        name="title" 
        value={post.title} 
        onChange={handleChange} 
        placeholder="Título" 
        className="w-full p-2 border rounded" />
        <input 
        type="text" 
        name="image" 
        value={post.image} 
        onChange={handleChange} 
        placeholder="URL de imagen" 
        className="w-full p-2 border rounded"
        />
        <input
        type="text"
        name="video"
        value={post.video}
        onChange={handleChange}
        placeholder="URL del video (YouTube o Vimeo)"
        className="w-full border p-2 rounded"
/>

        <option value="">Seleccionar categoria</option>
        <option value="modelos">Modelos</option>
        <option value="desfiles">Desfiles</option>
        <option value="trends">Trends</option>
        <option value="curiosidades">Curiosidades</option>
        <textarea 
        name="desc" 
        value={post.desc} 
        onChange={handleChange} 
        placeholder="Descripción" 
        className="w-full p-2 border rounded h-40" 
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
      </form>
    </div>
  );
}

export default EditPost;
