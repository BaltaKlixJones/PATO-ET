import logo from "../../Imagenes/logo2.png"
import React from 'react';
import './Head.css';

export default function Head () {
    return (
       <div className="head">
        <div className="titulo-head">       
        <img style={{marginTop:"10px", borderRadius:"50px"}}src={logo} alt="" />
        <h1>
            P.A.T.O. Estimulacion Temprana y Neurorehabilitación Integral
        </h1>
        </div>
       </div>
    );
    }
