import React from "react";
import "./Home.css";
import inicio from "../../Imagenes/inicio.png";
import Reseñas from "../../Components/Reseñas/Reseñas";

export default function Home() {
  return (
    <div className="home">
      <div className="imagen-home">
        <img src={inicio} alt="" />
        <p>Gracias a los papás de Simón</p>
      </div>
      <div className="titulo-home">
        {/* <h1>P.A.T.O Estimulación Temprana </h1> */}
        <h1 style={{fontSize:"25px", fontFamily:"Crimson Text Lobster"}}>Patricia Jones Bustos Fierro</h1>
        <h2 style={{fontSize:"18px"}}>Lic. en Educación Especial y Especialista en Estimulación Temprana</h2>
        <p style={{marginLeft:"50px", fontFamily:"cursive", fontSize:"20px"}}>
          Un centro de estimulación temprana y neurorehabilitación integral es
          un espacio especializado en la atención y cuidado de bebés, niños y
          adultos que presentan diferentes trastornos neurológicos y del
          desarrollo. En este centro se brinda una atención personalizada y
          multidisciplinaria, donde se trabaja en la prevención, evaluación,
          diagnóstico y tratamiento de diferentes patologías, con el objetivo de
          mejorar la calidad de vida de los pacientes y sus familias. El equipo
          profesional está compuesto por especialistas en neurología,
          psicología, psiquiatría, terapia ocupacional, fisioterapia, foniatría,
          entre otros, quienes trabajan en conjunto para desarrollar programas
          de estimulación y rehabilitación personalizados y adaptados a las
          necesidades de cada paciente. En este centro se utilizan diferentes
          técnicas y herramientas terapéuticas, como la estimulación temprana,
          la terapia ocupacional, la fisioterapia y la logopedia, entre otras,
          para promover el desarrollo cognitivo, físico y emocional de los
          pacientes y ayudarles a mejorar su autonomía, su comunicación y sus
          habilidades sociales. Además, el centro cuenta con un ambiente seguro,
          confortable y adaptado a las necesidades de los pacientes, con equipos
          y tecnologías de última generación, para garantizar una atención de
          calidad y eficaz.
        </p>
      </div>
    </div>
  );
}
