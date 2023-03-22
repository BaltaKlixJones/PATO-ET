import React from "react";
import "./Location.css";
import APIKEY from "../../config";

export default function Location() {
  

  return (
    <div className="container">
      <div className="encontrar" >
        <h1 >📌 Podés encontrarnos en :</h1>{" "}
        <div className="ubicacion">
        <h2 >
          Salta - Argentina 🇦🇷 <br /> <br />
          Guillermo Alzaga S/N. Barrio portal de Lesser.
        </h2>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "5%" }}>
        {/* <div style={{ flex: 1 }}>
    <div class="loader"> </div>
    <div class="loader__container"> Podés encontrarnos en :</div>
  </div> */}

        <div style={{ flex: 3, marginBottom: "80px" }}>
          <iframe
            title="Mapa de P.a.t.o - Centro de Estimulación Temprana y Neurorehabilitación Integral"
            width="1000"
            height="450"
            style={{ border: "0", boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)" }}
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${APIKEY}
      &q=P.a.t.o+-Centro+de+Estimulaci%C3%B3n+Temprana+y+Neurorehabilitacion+Integral+(de+Lic.+Patricia+Jones),-24.71882,-65.4110963`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
