import React from "react";
import { Link } from "react-router-dom";

function PostComp({ post }) {
  return (
    <Link to={`/post/${post._id}`} className="block hover:shadow-md transition-shadow">
      <div className="flex gap-4 border p-4 rounded">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-32 h-32 object-cover rounded"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
          <p className="text-gray-700 line-clamp-3">{post.desc}</p>
          <p className="text-sm text-gray-500 mt-2">
            {post.categories.join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostComp;
