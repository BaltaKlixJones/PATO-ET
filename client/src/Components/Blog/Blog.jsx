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
    <div className="blogcontainer">
      <div className="blog">
        <h2>Canal de Youtube </h2>
        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 24"
            width="54"
            height="44"
            style={{marginTop:"0px", marginLeft:"10px"}}
          >
            <path
              fill="#FF0000"
              d="M12,3C6.48,3,3,6.48,3,12s3.48,9,9,9s9-3.48,9-9s-3.48-9-9-9zM10,16.5V7.5l6,4.5L10,16.5z"
            />
          </svg> */}
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
        <div>
          <br />
          <br />
          <br />
          {/* <a
            href="https://www.youtube.com/@patriciajonessaltaargentin1719/videos"
            target="_blank"
          >
            <img src={profile} alt="" />
          </a> */}
        
        </div>
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
  );
};

export default Blog;
