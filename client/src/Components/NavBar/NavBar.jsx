import React, { useState } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  function toggleNav() {
    setOpen(!open);
    
  }

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <div className={style.header}>
      <button className={style.header__buttonNavOpen} onClick={toggleNav}>
      <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="" d="M3,6h18v2H3V6z M3,11h18v2H3V11z M3,16h18v2H3V16z"/>
  </svg>
      </button>
      <nav className={`${style.nav} ${open ? style.navShow : ""}`}>
        <div className={style.nav__button}>
          <button className={style.header__buttonNavClose} onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" width="24px" height="24px">
    <path d="M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
          </button>
        </div>
        <ul className={style.nav__ul}>
          <li className={style.nav__item}>
            <Link to="/" className={style.nav__link} onClick={closeNav}>
              Inicio
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link to="/Centro" className={style.nav__link} onClick={closeNav}>
              Centro
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link to="/Blog" className={style.nav__link} onClick={closeNav}>
              Blog
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link to="/QuienSoy" className={style.nav__link} onClick={closeNav}>
              Quien soy
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link to="/Cursos" className={style.nav__link} onClick={closeNav}>
              Cursos
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link to="/Contacto" className={style.nav__link} onClick={closeNav}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;