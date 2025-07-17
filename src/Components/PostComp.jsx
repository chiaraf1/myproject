import React from "react";
import { Link } from "react-router-dom";

function PostComp({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col min-h-[420px]">
      {post.image && (
        <Link to={`/post/${post._id}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}

      <div className="p-6 flex flex-col justify-between h-full">
        <div className="space-y-3">
          <Link to={`/post/${post._id}`}>
            <h3 className="text-2xl font-semibold tracking-tight leading-snug hover:underline">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-3">{post.desc}</p>
        </div>

        <div className="mt-4">
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            {post.categories.join(" / ")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostComp;
