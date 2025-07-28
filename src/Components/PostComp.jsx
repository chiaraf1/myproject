import React from "react";
import { Link, useLocation } from "react-router-dom";

function PostComp({ post }) {
  const location = useLocation();
  const isSingleView = location.pathname.includes(`/post/${post._id}`);

  const truncatedDesc = !isSingleView
    ? post.desc.split(" ").slice(0, 20).join(" ") + "..."
    : post.desc;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {/* Imagen */}
      {post.image && (
        <Link to={`/post/${post._id}`}>
          <img
            src={post.image}
            alt={post.title}
            className="h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      )}

      {/* Contenido */}
      <div className="p-6 flex flex-col justify-between flex-grow text-center">
        <Link to={`/post/${post._id}`}>
          <h3 className="text-xl font-serif italic mb-4 hover:underline">
            {post.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mb-4">{truncatedDesc}</p>

        <div className="text-xs uppercase text-gray-400 tracking-wide">
          {post.categories.join(" / ")}
        </div>
      </div>
    </div>
  );
}

export default PostComp;
