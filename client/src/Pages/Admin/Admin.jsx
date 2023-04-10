import React from "react";
import style from "./Admin.module.css";
import inicio from "../../Imagenes/inicio.png";
import Location from "../Location /Location";
import Reseñas from "../../Components/Reseñas/Reseñas";
import { getProfessionals } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Admin() {
  const allProfessionals = useSelector((state) => state.professionals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  return (
    <div className={style.admin}>
      <div className={style.tituloAdmin}>
        <div>

        <button className={style.btncerrarsesion}>Cerrar sesion</button>
        </div>
        <h1>PANEL DE ADMINISTRADORA</h1>
        <h4>
          Bienvenida PATO!
          <br />
        </h4>
        Este es el panel de administradora, donde podras eliminar profesionales
        y editar fotos
        <div className={style.btn}>
          
          <button className={style.button}>Profesionales</button>
          <button className={style.button}>Blog</button>
          <button className={style.button}>Contacto</button>
        </div>
      </div>
    </div>
  );
}
