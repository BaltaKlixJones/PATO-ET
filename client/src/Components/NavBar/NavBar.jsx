import React from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={style.navbar}>
      <button className={style.bottInicio}>
        Inicio
      </button>
      <button className={style.bottProf}>
        Profesionales
      </button>
      <button className={style.bottContacto}>
        Contacto
      </button>
      <button className={style.bottQS}>
        Quien soy
      </button>
      <button className={style.bottCursos}>
        Cursos
      </button>
    </div>
  );
};

export default NavBar;