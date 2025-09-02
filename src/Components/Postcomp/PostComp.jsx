import React from "react";
import { Link, useLocation } from "react-router-dom";
import './postcomp.css'

function PostComp({ post }) {
  const location = useLocation();
  const isSingleView = location.pathname.includes(`/post/${post._id}`);

  const truncatedDesc = !isSingleView
    ? post.desc.split(" ").slice(0, 20).join(" ") + "..."
    : post.desc;

  return (
    <div className="post-card">
      {/* Imagen */}
      {post.image && (
        <Link to={`/post/${post._id}`} className="post-image-link">
          <img
            src={post.image}
            alt={post.title}
            className="post-image"
          />
        </Link>
      )}

      {/* Contenido */}
      <div className="post-content">
        <Link to={`/post/${post._id}`} className="post-title-link">
          <h3 className="post-title">
            {post.title}
          </h3>
        </Link>

        <p className="post-description">{truncatedDesc}</p>

        <div className="post-categories">
          {post.categories.join(" / ")}
        </div>
      </div>
    </div>
  );
}

export default PostComp;
