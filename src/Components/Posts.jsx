import React, { useEffect, useState } from "react";
import axios from "axios";
import PostComp from "./PostComp"; // cada post individual

function Posts({ category }) {
const [posts, setPosts] = useState([]);
const API_URL = import.meta.env.VITE_API_URL;

console.log("API_URL desde Posts.jsx:", API_URL);

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
    <div className="max-w-4xl mx-auto p-6 space-y-4">
    {posts.length === 0 ? (
        <p className="text-gray-600">No hay posts disponibles.</p>
    ) : (
        <div className="grid md:grid-cols-2 gap-12">
        {posts.map((post) => (
        <PostComp key={post._id} post={post} />
        ))}
    </div>
)};
</div>
);
}

export default Posts;
