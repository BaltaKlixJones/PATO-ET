import React from "react";
import "./Home.css";
import inicio from "../../Imagenes/inicio.png";
export default function Home() {
  return (
    <div className="home">
      <div className="imagen-home">
        <img src={inicio} alt="" />
      </div>
      <div className="titulo-home">
        <h1>HOLA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          dolores, harum accusantium delectus sapiente nihil veritatis ducimus
          illo quas exercitationem in ullam distinctio hic, repudiandae
          reiciendis cupiditate debitis cum ipsum!
        </p>
      </div>
    </div>
  );
}
