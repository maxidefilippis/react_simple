import { createStore, combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer/reducer";

const reducers = combineReducers({ favoritesReducer });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
