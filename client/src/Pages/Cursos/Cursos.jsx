import style from "./Cursos.module.css";
import CursoCard from "../../Components/CursoCard/CursoCard";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";
import cursos from "../../Imagenes/curso-por-internet.png"

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
          <div className={style.cursotitulo}>
            <img style={{height:"60px", margin:"10px 10px 0px 0px  "}}src={cursos} alt="" />
            <h1>Cursos</h1>
          </div>
          <h4 style={{ margin: "10px 30px 10px 30px " }}>
            Estamos trabajando para desarrollar cursos donde ... Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quo quae ipsam nihil.
            Perferendis adipisci ipsum eaque esse accusamus, similique aut
            eligendi, odio facere nisi, dolore expedita sint. Pariatur, veniam
            sed!{" "}
          </h4>
        </div>
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
        <div className={style.cardCont}>
          <CursoCard />
        </div>
        <div className={style.recuadro}></div>
      </div>
    </div>
  );
}

