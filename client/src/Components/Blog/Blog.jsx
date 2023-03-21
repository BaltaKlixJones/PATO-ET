import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { useState, useEffect } from "react";
import { getBlog } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import CardBlog from "../BlogCard/BlogCard";

const Blog = () => {
  const blog = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <div className="blogcontainer">
      
        {blog.map(({ id, title, description, image, date }) => {
          return (
            <CardBlog
              id={id}
              key={id}
              title={title}
              image={image}
              description={description}
              date={date}
            />
          );
        })}
      
    </div>
  );
};

export default Blog;
