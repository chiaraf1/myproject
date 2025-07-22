import React from "react";
import { Link, useLocation } from "react-router-dom";

function PostComp({ post }) {
  const location = useLocation();
  const isSingleView = location.pathname.includes(`/post/${post._id}`);

  // Cortar la descripción en portada (no en la vista individual)
  const truncatedDesc = !isSingleView
    ? post.desc.split(" ").slice(0, 20).join(" ") + "..."
    : post.desc;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col items-center p-6 gap-6 max-w-3xl mx-auto text-center">
      {/* Imagen */}
      {post.image && (
        <Link to={`/post/${post._id}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-w-[600px] h-auto rounded-lg hover:scale-105 transition-transform duration-300 object-cover shadow-md mb-6"
          />
        </Link>
      )}

      {/* Título */}
      <Link to={`/post/${post._id}`}>
        <h3 className="text-2xl md:text-3xl font-serif italic tracking-wide hover:underline">
          {post.title}
        </h3>
      </Link>

      {/* Descripción (corta en portada, completa si se reutiliza en post individual) */}
      <p className="text-gray-700 text-base leading-relaxed max-w-prose">
        {truncatedDesc}
      </p>

      {/* Categorías */}
      <div className="mt-2">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          {post.categories.join(" / ")}
        </span>
      </div>
    </div>
  );
}

export default PostComp;
