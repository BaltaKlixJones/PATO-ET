import React, { useState } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navbar}> 
    <div className={style.menu}>
      <Link to="/">
        <button className={style.bottInicio}>Inicio</button>
      </Link>
  
      <Link to="/Centro">
        <button className={style.bottProf}>Centro</button>
      </Link>
  
      <Link to="/Blog">
        <button className={style.bottQS}>Blog</button>
      </Link>
  
      <Link to="/QuienSoy">
        <button className={style.bottQS}>Quien soy</button>
      </Link>
  
      <Link to="/Cursos">
        <button className={style.bottCursos}>Cursos</button>
      </Link>
  
      <Link to="/Contacto">
        <button className={style.bottContacto}>Contacto</button>
      </Link>
    </div>
  </div>
  )
};

export default NavBar;
