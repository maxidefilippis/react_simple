import { CLEAR_SEARCH, SEARCH_PLANET } from "../../constants";

const initialState = {
  planets: [],
  search: false,
};

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PLANET:
      return { ...state, planets: action.payload, search: true };
    case CLEAR_SEARCH:
      return {
        ...state,
        planets: [],
        search: false,
      };
    default:
      return state;
  }
};

export default planetsReducer;
