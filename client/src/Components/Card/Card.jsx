import React from "react";
import style from "./Card.module.css";


const Card = ({ id, name, lastName, profession, description, image }) => {
  return (
    <div className={style.card}>
      {/* <div className={style.image}>{image}</div> */}
      <img src={image} className={style.cardImage} alt="image" />
      <div className={style.name}>{name}</div>
      <div className={style.lastname}>{lastName}</div>
      <div className={style.profession}>{profession}</div>
      <div className={style.description}>{description}</div>
     
</div>
   
  );
};

export default Card;
