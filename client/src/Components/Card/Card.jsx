import React from "react";
import style from "./Card.module.css";


const Card = ({ id, name, profession, description, extra, otroextra, image }) => {
  return (
    <div className={style.card}>
     
      <img src={image} className={style.cardImage} alt="image" />
      <div className={style.name}>{name}</div>
      <div className={style.profession}>{profession}</div>
      <div className={style.description}>{description}</div>
      <div className={style.texto}>{extra}</div>
      <div className={style.texto}>{otroextra}</div>
     
</div>
   
  );
};

export default Card;
