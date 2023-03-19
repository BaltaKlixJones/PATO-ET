import { GET_PROFESSIONALS, GET_SERVICE } from "./Actions";

const initialState = {
  allProfessionals: [],
  allService: [],
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

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
