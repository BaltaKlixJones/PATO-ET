import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { useState, useEffect } from "react";
import { getBlog } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import CardBlog from "../BlogCard/BlogCard";
import profile from "../.././Imagenes/profile.jpg";

const Blog = () => {
  const blog = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <div  className="blogBack">
    <div className="blogBack1">
    <div className="blogcontainer">
      <div className="blogVideo">
        <iframe
          width="860"
          height="415"
          style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)" }}
          src="https://www.youtube.com/embed/7xfez-fecnI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100056806724891%2Fvideos%2F950730886285154%2F&show_text=false&width=267&t=0"
          width="267"
          height="415"
          style={{border:"none", overFlow:"hidden", marginLeft:"2%"}}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
      <div className="blogCard">
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
    </div>
    </div>
    </div>
  );
};

export default Blog;
