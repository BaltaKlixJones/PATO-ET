import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPato } from "../../Redux/Actions";
import PatoCard from "../PatoCard/PatoCard"; 
import style from "./PatoRender.module.css"


const PatoRender = () => {

  const Pato = useSelector((state) => state.pato);
  console.log(Pato);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPato());
  }, [dispatch]);

  return (
    <div className={style.cardsContainer}>
      <div className={style.borderCards}></div>

      {Pato.map(({ id, name, profession, description, extra, otroextra, image, phone, email }) => {
        return (
          <PatoCard
            id={id}
            key={id}
            image={image}
            name={name}
            profession={profession}
            description={description}
            extra={extra}
            otroextra={otroextra}
            phone={phone}
            email={email}

          />
        );
      })}
    </div>
  );
};

export default PatoRender;
