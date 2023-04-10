import React from "react";
import "./Location.css";
import { APIKEY } from "../../config";

export default function Location() {
  

  return (
    <div className="container">
      <div className="encontrar" >
        <h1 className="h1Local">📌 Podés encontrarnos en :</h1>
        <h3 className="h2Text">
          Salta - Argentina 🇦🇷 
          Guillermo Alzaga S/N. Barrio portal de Lesser.
        </h3>
      </div>
        <div className="mapa">
          <iframe
            title="Mapa de P.a.t.o - Centro de Estimulación Temprana y Neurorehabilitación Integral"
            width="1000"
            height="450"
            style={{ border: "0", boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${APIKEY}
      &q=P.a.t.o+-Centro+de+Estimulaci%C3%B3n+Temprana+y+Neurorehabilitacion+Integral+(de+Lic.+Patricia+Jones),-24.71882,-65.4110963`}
          ></iframe>
        </div>
      </div>
  );
}
