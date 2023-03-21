import React from "react";
import style from"./Admin.module.css";
import inicio from "../../Imagenes/inicio.png";
import Location from "../Location /Location";
import Reseñas from "../../Components/Reseñas/Reseñas";

export default function Admin() {
  return (
    <div className={style.admin}>
      <div className={style.imagenAdmin}>
        <img src={inicio} alt="" />
      </div>
      <div className={style.tituloAdmin}>
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
