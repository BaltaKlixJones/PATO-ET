import { GET_PATO, GET_PROFESSIONALS, GET_SERVICE, GET_BLOG } from "./Actions";

const initialState = {
  pato: [],
  allProfessionals: [],
  allService: [],
  blog : []
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
        case GET_BLOG:
          return {
            ...state,
            blog: action.payload,
          };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
