import React, { useEffect, useState } from "react";
import axios from "axios";
import PostComp from "./PostComp"; // cada post individual

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
    <div className="max-w-6xl mx-auto px-6 py-10">
    {posts.length === 0 ? (
        <p className="text-gray-600">No hay posts disponibles.</p>
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
            <PostComp key={post._id} post={post} />
        ))}
        </div>
    )}
    </div>
);
}

export default Posts;
