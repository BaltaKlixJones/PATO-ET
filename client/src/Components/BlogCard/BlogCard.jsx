import React from "react";
import "./BlogCard.css";

const BlogCard = ({ id, description, image, title, date }) => {
  return (
    <div className="cardBox">
      <div className="card">
        <span className="text">
          <img src={image} className="card-image" alt="image" />
        </span>
        <div className="content">
          <p>{title}</p>
          <p>{description}</p>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
