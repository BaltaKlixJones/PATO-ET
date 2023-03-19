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
      <div className={style.borderCards}></div>

      {allProfessionals.map(({ id, name, lastName, profession, description, image }) => {
        return (
          <Card
            id={id}
            key={id}
            image={image}
            name={name}
            lastName={lastName}
            profession={profession}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default Cards;
