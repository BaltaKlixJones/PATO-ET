import axios from "axios";

/* ----------------------------SERVICE--------------------------------- */

export const GET_PATO = "GET_PATO";


export const getPato = () => {
  return async function (dispatch) {
    const bdInfo = await axios.get("/pato");
    const pato = bdInfo.data;
    dispatch({ type: GET_PATO, payload: pato });
  };
};


/* ----------------------------PROFESSIONALS--------------------------------- */
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";


export const getProfessionals = () => {
  return async function (dispatch) {
    const bdInfo = await axios.get("/profesionales");
    const profs = bdInfo.data;
    dispatch({ type: GET_PROFESSIONALS, payload: profs });
  };
};


/* ----------------------------SERVICE--------------------------------- */
export const GET_SERVICE = "GET_SERVICE";


export const getService = () => {
  return async function (dispatch) {
    const bdInfo = await axios.get("/service");
    const serv = bdInfo.data;
    dispatch({ type: GET_SERVICE, payload: serv });
  };
};

