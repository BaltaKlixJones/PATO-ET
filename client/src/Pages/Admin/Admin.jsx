import React from "react";
import style from "./Admin.module.css";
import inicio from "../../Imagenes/inicio.png";
import Location from "../Location /Location";
import Reseñas from "../../Components/Reseñas/Reseñas";
import { getProfessionals } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Admin() {
 
  const Pato = useSelector((state) => state.pato);
  const dispatch = useDispatch();
  const id = useParams()
  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  return (
    <>
      <hr />
    <div className={style.admin}>
      <div className={style.tituloAdmin}>
        <div>
          <button className={style.btncerrarsesion}>Cerrar sesion</button>
        </div>
        <h1>PANEL DE ADMINISTRADORA</h1>
        <h2>
          Bienvenida PATO!
          <br />
        </h2>
        <div className={style.textoadmin}>

        ¡Bienvenido al panel de administración! Aquí podrás tomar el control
        total de tu sitio web o plataforma. Como administrador, tendrás acceso a
        herramientas que te permitirán editar, eliminar y agregar contenido para
        mejorar la experiencia de tus usuarios. Si necesitas eliminar o editar
        información de los profesionales de tu sitio, este es el lugar adecuado
        para hacerlo. Puedes agregar nuevas categorías, actualizar las
        existentes y eliminar cualquier información que ya no sea relevante.
        Además, podrás administrar las fotos de tu sitio web, cambiando las
        imágenes de fondo, actualizando las fotos de perfil y mucho más. Tendrás
        la libertad de personalizar tu sitio web como quieras para mantenerlo
        actualizado y atractivo para tus visitantes. En resumen, el panel de
        administración es una herramienta vital para mantener el control total
        de tu sitio web. Esperamos que aproveches todas las herramientas que
        tenemos disponibles para mejorar la experiencia de tus usuarios y
        mantener tu sitio actualizado y atractivo
        </div>
        <div className={style.btn}>
        <Link to={`/Administrador/Profesionales/${Pato[0].id}`}>
          <button className={style.button}>Profesionales</button>
          </Link>
          <button className={style.button}>Blog</button>
          <button className={style.button}>Contacto</button>
        </div>
      </div>
    </div>
    </>
  );
}
