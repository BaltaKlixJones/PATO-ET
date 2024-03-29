import React from "react";
import style from "./PatoCard.module.css";


const PatoCard = ({ id, name, profession, description, extra, otroextra, image, phone, email }) => {
  return (

    <div className={style.card}>
     <div className={style.div_img_pato} >

      <img src={image} className={style.cardImage} alt="pato" />
     </div>
      <div className={style.infoCont}>
        <div className={style.name}>{name}</div>
        <div className={style.profession}>{profession}</div>
        <div className={style.description}>{description}</div>
        <div className={style.texto}>{extra}</div>
        <div className={style.texto}>{otroextra}</div>
        <div className={style.phone}>{phone}</div>
        <div className={style.email}>{email}</div>
     </div>
</div>
 

   
  );
};

export default PatoCard;
