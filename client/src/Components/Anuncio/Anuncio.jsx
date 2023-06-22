import React, { useState } from "react";
import "./Anuncio.css";
import anuncio from "../../Imagenes/Anuncio.jpeg"

function Anuncio() {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="anuncio-overlay">
          <div className="anuncio-container">
            <div className="anuncio-content">

            <button className="cerrar-anuncio" onClick={handleShow}>
              X
            </button>
            <img className="img-anuncio" src={anuncio} alt="" />
            
          </div>
            </div>
        </div>
      )}
    </>
  );
}

export default Anuncio;

