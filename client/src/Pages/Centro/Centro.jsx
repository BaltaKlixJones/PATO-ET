import React from "react";
import Location from "../Location /Location";
import Cards from "../../Components/Cards/Cards";
import PatoRender from "../../Components/PatoRender/PatoRender";
import style from "./Centro.module.css";
import arcoiris from "../../Imagenes/arco-iris.png";

export default function Centro() {
  return (
    <div className={style.centro}>
      <div className={style.centro2}>
        <div>
          <div className={style.tituloCont}>
            <div className={style.h1Centro}>
              <img
                style={{ height: "40px", marginRight: "20px" }}
                src={arcoiris}
                alt=""
              />
              <h1>P.</h1>
              <h1>A.</h1>
              <h1>T.</h1>
              <h1>O</h1>
            </div>
            <h3 className={style.h3Centro}>
              Progreso con Amor, Trabajo Y Orden{" "}
            </h3>
          </div>
          <p style={{ margin: "30px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            assumenda unde nemo soluta repellat eaque vel deserunt similique
            dolor quisquam veniam dolore asperiores eveniet atque, ex optio
            error at! Similique? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Commodi assumenda unde nemo soluta repellat eaque
            vel deserunt similique dolor quisquam veniam dolore asperiores
            eveniet atque, ex optio error at! Similique?
          </p>
        </div>

        <div>
          <PatoRender />
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <Location />
        </div>
        <div className={style.recuadro}></div>
      </div>
    </div>
  );
}
