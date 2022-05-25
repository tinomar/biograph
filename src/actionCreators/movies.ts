import * as actions from "../actionTypes/movies";

export const searchMovieRequest = (term: string): actions.SearchMovieRequestAction => ({
    type: actions.SEARCH_MOVIES_REQUEST,
    term
});

export const searchMovieSuccess = (items: any[]): actions.SearchMovieSuccessAction => ({
    type: actions.SEARCH_MOVIES_SUCCESS,
    items
});

export const getMovieRequest = (id: string): actions.GetMovieRequestAction => ({
    type: actions.GET_MOVIE_REQUEST,
    id
});

export const getMovieSuccess = (data: any): actions.GetMovieSuccessAction => ({
    type: actions.GET_MOVIE_SUCCESS,
    data
});

export const addFavorite = (favorite: any): actions.AddFavoriteAction => ({
    type: actions.ADD_FAVORITE,
    favorite
});

export const removeFavorite = (index: number): actions.RemoveFavoriteAction => ({
    type: actions.REMOVE_FAVORITE,
    index
});