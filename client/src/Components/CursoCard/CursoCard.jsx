import React from "react";
import style from "./CursoCard.module.css";
import Swal from "sweetalert2";


const CursoCard = ({ id, name, profession, description, extra, otroextra, image }) => {

const alert = () => {
  Swal .fire({
    title: 'Estamos trabajando',
    text: "¡Pronto estará disponible!",
    icon: 'info',
    confirmButtonColor: '#19a501fd',
    confirmButtonText: 'Okey'
  } )
}

  return (
    <div className={style.cardCont}>
    <div className={style.pack_card}>
          <div className={style.banner}>
            <span className={style.banner_tag}>proximamente</span>
          </div>
          <div className={style.pack_name}>Online</div>

          <p className={style.description}>Podrás tener acceso limitado a todos los cursos con los siguientes beneificios</p>

          <div className={style.lists}>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span > Acceso a todos los cursos</span>
            </div>
            <div className={style.list}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
              <span>Acceso ilimitado </span>
            </div>
            <div className={style.list}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Consultas sobre el contenido </span>
            </div>
        </div>
        <div className={style.bottom}>
          <div className={style.price_container}>
            <span className={style.price}>10 USD / mes</span>
          </div>
          <button className={style.btn} onClick={alert} href="#">Comprar curso</button>
        </div>
      </div>
      <div className={style.pack_card}>
          <div className={style.banner}>
            <span className={style.banner_tag}>proximamente</span>
          </div>
          <div className={style.pack_name}>Online</div>

          <p className={style.description}>Podrás tener acceso limitado a todos los cursos con los siguientes beneificios</p>

          <div className={style.lists}>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Acceso a todos los cursos</span>
            </div>
            <div className={style.list}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
              <span>Acceso ilimitado </span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Consultas sobre el contenido</span>
            </div>
        </div>
        <div className={style.bottom}>
          <div className={style.price_container}>
            <span className={style.price}>50 USD / 6 meses</span>
          </div>
          <button className={style.btn} onClick={alert} href="#">Comprar curso</button>
        </div>
      </div>
      <div className={style.pack_card}>
          <div className={style.banner}>
            <span className={style.banner_tag}>proximamente</span>
          </div>
          <div className={style.pack_name}>Online</div>

          <p className={style.description}>Podrás tener acceso ilimitado a todos los cursos con un único pago y los siguientes beneificios</p>

          <div className={style.lists}>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Acceso a todos los cursos</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Acceso ilimitado</span>
            </div>
            <div className={style.list}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Consultas sobre el contenido</span>
            </div>
        </div>
        <div className={style.bottom}>
          <div className={style.price_container}>
            <span className={style.price}>100 USD</span>
          </div>
          <button className={style.btn} onClick={alert} href="#">Comprar curso</button>
        </div>
      </div>
      </div>
   
  );
};

export default CursoCard;