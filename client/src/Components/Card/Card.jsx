import React from "react";
import style from "./Card.module.css";


const Card = ({ id, name, lastname, profession, description, image }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>{image}</div>
      <div className={style.name}>{name}</div>
      <div className={style.lastname}>{lastname}</div>
      <div className={style.profession}>{profession}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default Card;
