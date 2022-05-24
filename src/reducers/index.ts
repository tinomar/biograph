import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;