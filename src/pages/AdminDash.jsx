import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDash() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    axios.get(`${API_URL}/posts`).then((res) => setPosts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/posts/${id}`);
    setPosts(posts.filter((p) => p._id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin</h2>
      {posts.map((post) => (
        <div key={post._id} className="border p-3 mb-3 rounded flex justify-between items-center">
          <div>
            <p className="font-semibold">{post.title}</p>
            <p className="text-xs text-gray-500">{post.categories.join(", ")}</p>
          </div>
          <div className="space-x-2">
            <button onClick={() => navigate(`/edit/${post._id}`)} className="text-blue-600">Editar</button>
            <button onClick={() => handleDelete(post._id)} className="text-red-600">Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDash;
