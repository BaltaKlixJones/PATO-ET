import React from "react";
import Location from "../Location /Location";
import Cards from "../../Components/Cards/Cards";
import PatoRender from "../../Components/PatoRender/PatoRender";
import style from "./Centro.module.css";
import arcoiris from "../../Imagenes/arco-iris.png";
import marian from "../../Imagenes/marian1en150.jpg";

export default function Centro() {
  return (
    <div className={style.centro}>
      <div className={style.centro2}>
        <div>
          <div className={style.tituloCont}>
            <div className={style.h1Centro}>
              <img
                style={{ height: "35px", marginRight: "20px" }}
                src={arcoiris}
                alt=""
              />
              <h2>P.</h2>
              <h2>A.</h2>
              <h2>T.</h2>
              <h2>O</h2>
            </div>
            <h3 className={style.h3Centro}>
              Progreso con Amor, Trabajo Y Orden{" "}
            </h3>
          </div>
          <p style={{ margin: "3rem" }}></p>
        </div>
        <div>
          <PatoRender />
        </div>
        <div className={style.mariandiv}>
          <img src={marian} alt="marian" className={style.imgmarian} />
          <a
          style={{color: "blue", fontStyle: "italic"}}
            target="_blank"
            href="http://www.saltabebe.com.ar/Portada?n=Detr%C3%A1s_del_reto_est%C3%A1_la_bendici%C3%B3n"
            rel="noreferrer"
          >
            <h3>Detrás del reto está la bencidición</h3>
          </a>
        </div>
        <div>
          <Cards />
        </div>
        <div className="location">
          <Location />
        </div>
        <div className={style.recuadro}></div>
        <h4 className={style.recuadroH4}>
          © 2023 | P.A.T.O. Estimulación Temprana y Neurorehabilitación Integral
          | Derechos Reservados.
        </h4>
      </div>
    </div>
  );
}
