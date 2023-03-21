import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals, getTurns } from "../../Redux/Actions";
import Card from "../Card/Card";
import style from "./Cards.module.css";


const Cards = () => {

  const allProfessionals = useSelector((state) => state.allProfessionals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  return (
    <div className={style.cardsContainer}>
      {allProfessionals.map(({ id, name, profession, description, extra, otroextra, image }) => {
        return (
          <Card
            id={id}
            key={id}
            image={image}
            name={name}
            profession={profession}
            description={description}
            extra={extra}
            otroextra={otroextra}
          />
        );
      })}
    </div>
  );
};

export default Cards;
