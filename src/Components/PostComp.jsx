import React from "react";
import { Link } from "react-router-dom";

function PostComp({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col p-6 gap-6 max-w-4xl mx-auto">
      {/* Título */}
      <Link to={`/post/${post._id}`}>
        <h3 className="text-3xl font-serif italic tracking-wide text-center hover:underline mb-4">
          {post.title}
        </h3>
      </Link>

      {/* Imagen + Video (si existe) */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
        )}
        {post.video && (
          <video
            src={post.video}
            controls
            className="w-full md:w-1/2 rounded-xl shadow-md"
          />
        )}
      </div>

      {/* Descripción */}
      <p className="text-gray-700 text-base leading-relaxed text-center">
        {post.desc}
      </p>

      {/* Categorías */}
      <div className="text-center mt-2">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          {post.categories.join(" / ")}
        </span>
      </div>
    </div>
  );
}

export default PostComp;
