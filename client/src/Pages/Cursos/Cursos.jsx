import style from "./Cursos.module.css";
import CursoCard from "../../Components/CursoCard/CursoCard";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";
import cursos from "../../Imagenes/curso-por-internet.png";
import online from "../../Imagenes/educacion-en-linea.png";

export default function Cursos() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Agrega una pausa de 2 segundos antes de cambiar el estado de loading a falso
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Limpia el temporizador si el componente es desmontado antes de que se complete
    return () => clearTimeout(timeoutId);
  }, []);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className={style.container}>
      <div className={style.container2}>
        <div className={style.titulo}>
          <div className={style.cursotitulo1}>
            <div className={style.textoT}>
              <img
                style={{ height: "60px", margin: "10px 10px 0px 0px  " }}
                src={cursos}
                alt=""
              />
              <h1>Diagnóstico Express</h1>
            </div>
          </div>
        </div>
        <div className={style.video}>
          {loading ? (
            <Loading />
          ) : (
            <iframe
              width="760"
              height="415"
              src="https://www.youtube.com/embed/nHCx05rpesQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={handleVideoLoad}
            ></iframe>
          )}
        </div>
        <div className={style.cardCont}>
          <div className={style.cursotitulo2}>
            <div className={style.textoT}>
              <img
                style={{ height: "60px", margin: "10px 20px 0px 0px  " }}
                src={online}
                alt=""
              />
              <h1>Online </h1>
            </div>
          </div>
          <div className={style.proximo}>
            <h3
              style={{ margin: "30px 20px 30px 20px ", letterSpacing: "1px" }}
            >
              Estamos desarrollando cursos online de estimulación temprana para
              padres, cuidadores y educadores que quieran aprender sobre el
              desarrollo infantil durante los primeros años de vida. Aprenderás
              a través de videos, y tendrás acceso a un equipo de profesionales
              en el campo de la estimulación temprana. Este curso es para
              aquellos que quieran adquirir habilidades prácticas para apoyar el
              desarrollo de los niños en el área de la estimulación temprana.
            </h3>
          </div>
          <CursoCard />
        </div>
        <div className={style.recuadro}></div>
        <h4 className={style.recuadroH4}>© 2022 | P.A.T.O. Estimulación Temprana y Neurorehabilitación Integral | Derechos Reservados.</h4>
      </div>
    </div>
  );
}
