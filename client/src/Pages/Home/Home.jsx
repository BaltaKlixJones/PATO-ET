import React from "react";
import "./Home.css";
import inicio from "../../Imagenes/inicio.png";
import Reseñas from "../../Components/Reseñas/Reseñas";

export default function Home() {
  return (
    <div className="home">

     


      
      <div className="imagen-home">
        <img src={inicio} alt="" />
        <div className="textofoto">

        <p> Gracias a José Zambrano, Mariana Borigen y Simón por permitirme usar esta foto</p>
        </div>
      </div>
      <div className="titulo-home">
        {/* <h1>P.A.T.O Estimulación Temprana </h1> */}
        <h1 style={{ fontSize: "25px", fontFamily: "Crimson Text Lobster" }}>
          Patricia Jones Bustos Fierro
        </h1>
        <h2 style={{ fontSize: "18px" }}>
          Lic. en Educación Especial y Especialista en Estimulación Temprana
        </h2>
        <div className="texto">
        <p
          
        >
          Nuestro Centro de Estimulación Temprana y Neurorehabilitación integral
          es un espacio especializado en la atención y cuidado de bebés y niños
          que presentan diferentes trastornos neurológicos y del desarrollo. En
          este centro se brinda una atención personalizada y multidisciplinaria,
          donde se trabaja en la prevención, evaluación, diagnóstico y
          tratamiento de diferentes patologías, con el objetivo de mejorar la
          calidad de vida de los pacientes y sus familias. El equipo profesional
          está compuesto por especialistas en Psicología, Fisioterapia,
          Fonoaudiologia, Psicopedagogía, Estimulación Temprana, Psicomotricidad
          entre otros, quienes trabajamos en conjunto para desarrollar programas
          de estimulación y rehabilitación personalizados y adaptados a las
          necesidades de cada paciente. En este centro utilizamos diferentes
          técnicas y herramientas terapéuticas,con profesiónales capacitados a
          tal fin. Además, el centro cuenta con un ambiente seguro, agradable, 
          confortable y adaptado a las necesidades de los pacientes.
        </p>
        </div>
      </div>
      </div>
   
    
  );
}
