import { GET_PATO, GET_PROFESSIONALS, GET_SERVICE } from "./Actions";

const initialState = {
  pato: [],
  allProfessionals: [],
  allService: [],
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_PATO:
      return {
        ...state,
        pato: action.payload,
      };

    case GET_PROFESSIONALS:
      return {
        ...state,
        allProfessionals: action.payload,
      };

      case GET_SERVICE:
        return {
          ...state,
          allService: action.payload,
        };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
