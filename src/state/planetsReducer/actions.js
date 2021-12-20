import { CLEAR_SEARCH, SEARCH_PLANET } from "../../constants";

export const searchPlanet = (payload) => {
  return {
    type: SEARCH_PLANET,
    payload,
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};
