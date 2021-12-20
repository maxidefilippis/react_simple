import { createStore, combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer/reducer";
import planetsReducer from "./planetsReducer/reducer";

const reducers = combineReducers({ planetsReducer, favoritesReducer });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
