import React from "react";
import "./Location.css";


export default function Location() {
    
    const APIKEY = "AIzaSyDQU1s1JY64YJYIeIZFqZbRGtfaJDaSn5U"

  return (
    <div style={{ display: "flex", marginTop:"5%" }}>
  {/* <div style={{ flex: 1 }}>
    <div class="loader"> </div>
    <div class="loader__container"> Podés encontrarnos en :</div>
  </div> */}
  <div style={{ flex: 3 , }}>
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
  );
}
