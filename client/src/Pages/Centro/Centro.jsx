import React from "react";
import Location from "../Location /Location";
import Cards from "../../Components/Cards/Cards";
import PatoRender from "../../Components/PatoRender/PatoRender";


export default function Centro() {
  return (
    <>
      <div>
        <h1>P.A.T.O</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          assumenda unde nemo soluta repellat eaque vel deserunt similique dolor
          quisquam veniam dolore asperiores eveniet atque, ex optio error at!
          Similique? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Commodi assumenda unde nemo soluta repellat eaque vel deserunt
          similique dolor quisquam veniam dolore asperiores eveniet atque, ex
          optio error at! Similique?
        </p>
      </div>

      <div>
        <Location />
      </div>
      <div>
        <PatoRender/>
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
}
