import * as actions from "../actionTypes/movies";

export const searchMovie = (term: string): actions.SearchMovieAction => ({
    type: actions.SEARCH_MOVIES,
    term
});

export const searchMovieRequest = (): actions.SearchMovieRequestAction => ({
    type: actions.SEARCH_MOVIES_REQUEST
});

export const searchMovieSuccess = (items: any[]): actions.SearchMovieSuccessAction => ({
    type: actions.SEARCH_MOVIES_SUCCESS,
    items
});

export const searchMovieFailure = (error: Error | string): actions.SearchMovieFailureAction => ({
    type: actions.SEARCH_MOVIES_FAILURE,
    error
});

export const getMovie = (id: string): actions.GetMovieAction => ({
    type: actions.GET_MOVIE,
    id
});

export const getMovieRequest = (): actions.GetMovieRequestAction => ({
    type: actions.GET_MOVIE_REQUEST
});

export const getMovieSuccess = (data: any): actions.GetMovieSuccessAction => ({
    type: actions.GET_MOVIE_SUCCESS,
    data
});

export const getMovieFailure = (error: Error | string): actions.GetMovieFailureAction => ({
    type: actions.GET_MOVIE_FAILURE,
    error
});

export const addFavorite = (favorite: any): actions.AddFavoriteAction => ({
    type: actions.ADD_FAVORITE,
    favorite
});

export const removeFavorite = (index: number): actions.RemoveFavoriteAction => ({
    type: actions.REMOVE_FAVORITE,
    index
});