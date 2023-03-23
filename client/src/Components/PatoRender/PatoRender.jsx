import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPato } from "../../Redux/Actions";
import PatoCard from "../PatoCard/PatoCard"; 
import style from "./PatoRender.module.css"
import Loading from "../../Pages/Loading/Loading";


const PatoRender = () => {
  const Pato = useSelector((state) => state.pato);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPato()).finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className={style.cardsContainer}>
      <div className={style.borderCards}></div>
      {loading ? (
        <Loading />
      ) : (
        Pato.map(({ id, name, profession, description, extra, otroextra, image, phone, email }) => (
          <PatoCard
            key={id}
            id={id}
            name={name}
            profession={profession}
            description={description}
            extra={extra}
            otroextra={otroextra}
            image={image}
            phone={phone}
            email={email}
          />
        ))
      )}
    </div>
  );
};

export default PatoRender;
