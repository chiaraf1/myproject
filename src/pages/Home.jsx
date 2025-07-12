import React, { useEffect, useState } from "react";
import axios from "axios";
import PostComp from "../Components/PostComp"


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      console.log("respuesta de API Posts:", res.data);
      setPosts(Array.isArray(res.data) ? res.data : res.data.posts || []);
      ;
  });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog de Moda</h1>
      {posts.map((post) => (
        <PostComp key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;
