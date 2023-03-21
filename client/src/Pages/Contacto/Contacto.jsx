import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPato } from "../../Redux/Actions";
import style from "./Contacto.module.css"


const Contacto = () => {

  const Pato = useSelector((state) => state.pato);
  console.log(Pato);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPato());
  }, [dispatch]);

  return (
    <div className={style.contacto}>
        <div className={style.titulo}>
            <h1>Contacta con nosotros</h1>
            <hr color="white" size="2" width="25%"/>
        </div>
      {Pato && Pato[0] ? (
          <div className={style.contactCard}>
            <div className={style.infoCard}>
                <h2 className={style.name}>{Pato[0].name}</h2>
                <p className={style.profession}>{Pato[0].profession}</p>
                <p className={style.description}>{Pato[0].description}</p>
                <p className={style.extra}>{Pato[0].extra}</p>
                {/* <p className={style.otroextra}>{Pato[0].otroextra}</p> */}
                <p className={style.phone}>Cel: {Pato[0].phone}</p>
                <p className={style.email}>E-mail: {Pato[0].email}</p>
            </div>
        </div>
      ) : (
        <div>No se encontró el pato</div>
      )}
    </div>
  );
};

export default Contacto;
