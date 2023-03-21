import React from "react";
import style from "./PatoCard.module.css";


const PatoCard = ({ id, name, profession, description, extra, otroextra, image, phone, email }) => {
  return (
    <div className={style.card}>
     
      <img src={image} className={style.cardImage} alt="image" />
      <div className={style.infoCont}>
        <div className={style.name}>{name}</div>
        <div className={style.profession}>{profession}</div>
        <div className={style.description}>{description}</div>
        <div className={style.texto}>{extra}</div>
        <div className={style.texto}>{otroextra}</div>
        <div className={style.phone}>{phone}</div>
        <div className={style.profession}>{email}</div>
     </div>
</div>
   
  );
};

export default PatoCard;
