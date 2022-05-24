import * as actions from "../actionTypes/movies";

export const searchMovieRequest = (term: string): actions.SearchMovieRequestAction => ({
    type: actions.SEARCH_MOVIES_REQUEST,
    term
});

export const searchMovieSuccess = (movies: any[]): actions.SearchMovieSuccessAction => ({
    type: actions.SEARCH_MOVIES_SUCCESS,
    movies
});