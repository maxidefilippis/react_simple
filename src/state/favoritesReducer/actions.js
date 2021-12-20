import { ADD_FAVORITE, REMOVE_FAVORITE, CLEAR_FAVORITES } from "../../constants";

export const addFavorite = (payload) => {
  return {
    type: ADD_FAVORITE,
    payload,
  };
};

export const removeFavorite = (payload) => {
  return {
    type: REMOVE_FAVORITE,
    payload,
  };
};

export const clearFavorites = () => {
  return {
    type: CLEAR_FAVORITES,
  };
};
