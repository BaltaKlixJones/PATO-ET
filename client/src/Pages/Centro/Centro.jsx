import React from "react";
import Location from "../Location /Location";
import Cards from "../../Components/Cards/Cards";
import PatoRender from "../../Components/PatoRender/PatoRender";
import style from "./Centro.module.css"


export default function Centro() {

  
  return (
    <div className={style.centro}>
      <div className={style.centro2}>
      <div>
        <h1 className={style.h1Centro}>P.A.T.O </h1>
        <h3>Progreso con Amor, Trabajo Y Orden </h3>
        <p style={{margin:"30px"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          assumenda unde nemo soluta repellat eaque vel deserunt similique dolor
          quisquam veniam dolore asperiores eveniet atque, ex optio error at!
          Similique? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Commodi assumenda unde nemo soluta repellat eaque vel deserunt
          similique dolor quisquam veniam dolore asperiores eveniet atque, ex
          optio error at! Similique?
        </p>
      </div>

      <div>
        <PatoRender/>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Location />
      </div>
      </div>
    </div>
  );
}
