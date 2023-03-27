import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { useState, useEffect } from "react";
import { getBlog } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import CardBlog from "../BlogCard/BlogCard";
import youtube from "../.././Imagenes/youtube.png";
import galeria from "../.././Imagenes/galeria.png";
import Loading from "../../Pages/Loading/Loading";

const Blog = () => {
  const blog = useSelector((state) => state.blog);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog()).then(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="blogBack">
      <div className="blogBack1">
        <div className="tituloBlog">
          <img
            style={{ height: "60px", marginTop: "10px", marginRight: "10px" }}
            src={youtube}
            alt=""
          />
          

          <h1> Videos </h1>
          
          <div className="subtitulo">
            <h3>
              {" "}
              En mi canal de Youtube podés ver mas videos sobre el centro y cómo
              trabajamos{" "}
            </h3>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="blogcontainer">
            <div className="blogVideo">
              <iframe
                width="860"
                height="415"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)" }}
                src="https://www.youtube.com/embed/7xfez-fecnI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
              className="videoFB"
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100056806724891%2Fvideos%2F950730886285154%2F&show_text=false&width=267&t=0"
                width="267"
                height="415"
                style={{ border: "none", overFlow: "hidden", marginLeft: "2%" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>

            <div className="tituloBlog">
              <img
                style={{
                  height: "60px",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
                src={galeria}
                alt=""
              />
              <h1>Blog</h1>
              <div className="subtitulo">
                <h3>
                  Aquí podrás ver algunas fotos de nuestros pacientes, equipo y
                  centro{" "}
                </h3>
              </div>
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
            <a
              href="https://www.instagram.com/p.a.t.o_estimulacion/"
              target="_blank"
            >
              <img
                style={{
                  height: "45px",
                  width: "45px",
                  borderRadius: "50%",
                  marginBottom: "-15px",
                  marginTop: "3rem",
                }}
                src="https://static.vecteezy.com/system/resources/previews/016/716/448/non_2x/instagram-icon-free-png.png"
                alt=""
              />
            </a>
            <h3 style={{ marginBottom: "100px" }}>
              ¡ Podes ver más fotos y videos en nuestro instagram !
            </h3>
          </div>
        )}
        <div className="recuadro"></div>
        <h4 className="recuadroH4" >© 2022 | P.A.T.O. Estimulación Temprana y Neurorehabilitación Integral | Derechos Reservados.</h4> 
      </div>
    </div>
  );
};

export default Blog;
