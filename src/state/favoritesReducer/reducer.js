import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAN_FAVORITES,
} from "../../constants";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (element) => element.name !== action.payload.name
        ),
      };
    case CLEAN_FAVORITES:
      return { ...state, favorites: [] };
    default:
      return state;
  }
};

export default favoritesReducer;
