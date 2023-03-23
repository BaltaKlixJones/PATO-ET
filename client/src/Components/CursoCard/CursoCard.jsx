import React from "react";
import style from "./CursoCard.module.css";


const CursoCard = ({ id, name, profession, description, extra, otroextra, image }) => {
  return (
    <div className={style.cardCont}>
    <div className={style.pack_card}>
          <div className={style.banner}>
            <span className={style.banner_tag}>proximamente</span>
          </div>
          <div className={style.pack_name}>Cursos</div>

          <p className={style.description}>Trabajamos para desarrollar más cursos y talleres</p>

          <div className={style.lists}>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 1</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 2</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 3</span>
            </div>
        </div>
        <div className={style.bottom}>
          <div className={style.price_container}>
            <span className={style.price}> $1000/mes</span>
          </div>
          <button className={style.btn} onClick={() => alert("Estamos trabajando para desarrollar estos cursos")} href="#">Comprar curso</button>
        </div>
      </div>
      <div className={style.pack_card}>
          <div className={style.banner}>
            <span className={style.banner_tag}>proximamente</span>
          </div>
          <div className={style.pack_name}>Cursos</div>

          <p className={style.description}>Trabajamos para desarrollar más cursos y talleres</p>

          <div className={style.lists}>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 1</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 2</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 3</span>
            </div>
        </div>
        <div className={style.bottom}>
          <div className={style.price_container}>
            <span className={style.price}> $5.000/ <br/>6 meses</span>
          </div>
          <button className={style.btn} onClick={() => alert("Estamos trabajando para desarrollar estos cursos")} href="#">Comprar curso</button>
        </div>
      </div>
      <div className={style.pack_card}>
          <div className={style.banner}>
            <span className={style.banner_tag}>proximamente</span>
          </div>
          <div className={style.pack_name}>Cursos</div>

          <p className={style.description}>Trabajamos para desarrollar más cursos y talleres</p>

          <div className={style.lists}>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 1</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 2</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>curso 3</span>
            </div>
        </div>
        <div className={style.bottom}>
          <div className={style.price_container}>
            <span className={style.price}> $10.000/año</span>
          </div>
          <button className={style.btn} onClick={() => alert("Estamos trabajando para desarrollar estos cursos")} href="#">Comprar curso</button>
        </div>
      </div>
      </div>
   
  );
};

export default CursoCard;