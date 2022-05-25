import { combineReducers } from "redux";
import moviesReducer, { MoviesState } from "./moviesReducer";
import isLoadingReducer, { IsLoadingState } from "./isLoadingReducer";
import errorReducer, { ErrorState } from "./errorReducer";

export interface RootState {
  movies: MoviesState;
  isLoading: IsLoadingState;
  error: ErrorState;
}

const rootReducer = combineReducers({
  movies: moviesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;