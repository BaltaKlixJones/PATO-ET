import React from "react";
import style from "./QuienSoy.module.css";
import perfilQuienSoy from "../../Imagenes/quiensoyimg.jpg";

export default function QuienSoy() {
  return (
    <div className={style.fondo}>
      <div className={style.container}>
        <div className={style.containter2}>
          <div className={style.title}>
            <h1>Patricia Jones</h1>
          </div>
          <div className={style.imgQuiensoy}>
            <img src={perfilQuienSoy} alt="" />
          </div>
          
            <div className={style.subtitle}>
              <h3>
                
                Soy Patricia Jones Bustos Fierro y, en primer lugar, soy una
                orgullosa mamá de tres hijos; Santiago, Baltasar y Juan.
              </h3>
            </div>
            <div className={style.description}>
              <h4>
                <br/>Me gradué en la Facultad de Educación y Salud (F.E.S), DR.
                DOMINGO CABRED, en Córdoba, como Profesora en Educación
                Especial. Posteriormente, realicé una Especialización en
                Estimulación Temprana y Psicopedagogía Inicial en el Centro
                Crianza y una Licenciatura en Educación Especial en la
                Universidad del Salvador, entre otros títulos. Durante muchos
                años, trabajé en Instituciones Privadas y del Estado, en
                Hospitales, atención domiciliaria y en consultorio particular,
                ofreciendo servicios de Estimulación Temprana. 
                <br/><br/> 
                
                
                Hace algunos
                años, logré cumplir uno de mis sueños gracias al apoyo
                incondicional de mi marido: abrir en 2019 mi CENTRO DE
                ESTIMULACIÓN TEMPRANA Y NEUROREHABILITACIÓN INTEGRAL, PATO, en
                la ciudad de Salta. Desde entonces, he estado trabajando allí
                con el objetivo de hacer lo que me hace feliz: acompañar a las
                familias con niños que presentan desafíos en su neurodesarrollo
                y ayudarles en su evolución y crecimiento. Me acompaña un equipo
                de profesionales que comparte mi visión.
                 <br/><br/>
                 A lo largo de los años, he acumulado una gran cantidad de experiencia y conocimientos en
                este campo, y siempre estoy estudiando porque amo lo que hago.
                Es por eso que he creado esta página, para compartir a través de
                cursos lo que he aprendido y lo que sé con ustedes
              </h4>
            </div>
          </div>
        </div>
    </div>
  );
}
