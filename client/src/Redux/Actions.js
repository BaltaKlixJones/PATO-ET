import axios from "axios";

/* ----------------------------PROFESSIONALS--------------------------------- */
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";


export const getProfessionals = () => {
  return async function (dispatch) {
    const bdInfo = await axios.get("http://localhost:3001/profesionales");
    const profs = bdInfo.data;
    dispatch({ type: GET_PROFESSIONALS, payload: profs });
  };
};

export const GET_SERVICE = "GET_SERVICE";


export const getService = () => {
  return async function (dispatch) {
    const bdInfo = await axios.get("http://localhost:3001/service");
    const profs = bdInfo.data;
    dispatch({ type: GET_SERVICE, payload: profs });
  };
};

