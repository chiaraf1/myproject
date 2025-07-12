import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    desc: "",
    image: "",
    categories: [""],
    video:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "categories") {
      setPost({ ...post, categories: [value] });
    } else {
      setPost({ ...post, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/posts", post);
      alert("Post creado exitosamente");
      navigate("/admin");
    } catch (err) {
      console.error("Error al crear post:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Crear Nuevo Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          placeholder="Título"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="image"
          value={post.image}
          onChange={handleChange}
          placeholder="URL de imagen"
          className="w-full border p-2 rounded"
        />
        <input
        type="text"
        name="video"
        value={post.video}
        onChange={handleChange}
        placeholder="URL del video (YouTube o Vimeo)"
        className="w-full border p-2 rounded"
/>


        <select
          name="categories"
          value={post.categories[0]}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Seleccionar categoría</option>
          <option value="modelos">Modelos</option>
          <option value="desfiles">Desfiles</option>
          <option value="trends">Trends</option>
          <option value="curiosidades">Curiosidades</option>
        </select>

        <textarea
          name="desc"
          value={post.desc}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full border p-2 rounded h-40"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
