import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPato } from "../../Redux/Actions";
import style from "./Contacto.module.css";

const Contacto = () => {
  const Pato = useSelector((state) => state.pato);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPato());
  }, [dispatch]);

  return (
    <div className={style.contacto1}>

   
    <div className={style.contacto}>
      <div className={style.titulo}>
        <h2 style={{marginTop:"85px"}}>Contacta con nosotros</h2>
        <hr color="white" size="2" width="25%" />
        <div className={style.imgTit} style={{ opacity: "0.8", marginBottom:"-20px" }}>
          <a
            href="https://www.instagram.com/p.a.t.o_estimulacion/"
            target="_blank"
          >
            <img
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                marginRight: "30px",
              }}
              src="https://static.vecteezy.com/system/resources/previews/016/716/448/non_2x/instagram-icon-free-png.png"
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100056806724891"
            target="_blank"
          >
            <img
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                marginRight: "30px",
              }}
              src="https://w7.pngwing.com/pngs/247/102/png-transparent-circle-facebook-fb-round-icon-social-media-social-network-popular-services-brands-vol-icon-thumbnail.png"
              alt=""
            />
          </a>
          <a href="https://wa.me/543874113328" target="_blank">
            <img
              style={{
                height: "60px",
                width: "60px",
                
                marginRight: "30px",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
              alt=""
            />
          </a>
          <a href="mailto:patriciajones0316@gmail.com" target="_blank">
            <img 
            style={{
              height: "58px",
              width: "58px",
              marginRight: "",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/1200px-Mail_%28iOS%29.svg.png" alt="" />
          </a>
        </div>
      </div>
      {Pato && Pato[0] ? (
        <div className={style.contactCard}>
          <div className={style.infoCard}>
            <h2 className={style.name}>{Pato[0].name}</h2>
            <h3 className={style.profession}>{Pato[0].profession}</h3>
            <p className={style.description}>{Pato[0].description}</p>
            <p className={style.extra}>{Pato[0].extra}</p>
            {/* <p className={style.otroextra}>{Pato[0].otroextra}</p> */}
            <p className={style.phone}>Cel: {Pato[0].phone}</p>
            <p className={style.email} style={{ color: "black" }}>
              E-mail:
              <a href="mailto:patriciadesalta_9@hotmail.com" target="_blank">
                <p style={{ color: " rgb(63, 121, 230)" }}> {Pato[0].email} </p>
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    </div>
  );
};

export default Contacto;
