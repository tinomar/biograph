import { AnyRecord } from "dns";

export const Types = {
    SEARCH_MOVIES_REQUEST: 'SEARCH_MOVIES_REQUEST',
    SEARCH_MOVIES_SUCCESS: 'SEARCH_MOVIES_SUCCESS'
};

export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
export interface SearchMovieRequestAction {
    type: typeof SEARCH_MOVIES_REQUEST;
    term: string;
}

export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export interface SearchMovieSuccessAction {
    type: typeof SEARCH_MOVIES_SUCCESS;
    items: any[]
}

export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";
export interface SearchMovieFailureAction {
    type: typeof SEARCH_MOVIES_FAILURE;
    error: Error | string;
}

export const GET_MOVIE_REQUEST = "GET_MOVIE_REQUEST";
export interface GetMovieRequestAction {
    type: typeof GET_MOVIE_REQUEST;
    id: string;
}

export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export interface GetMovieSuccessAction {
    type: typeof GET_MOVIE_SUCCESS;
    data: any
}

export const GET_MOVIE_FAILURE = "GET_MOVIE_FAILURE";
export interface GetMovieFailureAction {
    type: typeof GET_MOVIE_FAILURE;
    error: Error | string;
}


export const ADD_FAVORITE = "ADD_FAVORITE";
export interface AddFavoriteAction {
    type: typeof ADD_FAVORITE;
    favorite: AnyRecord;
}

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export interface RemoveFavoriteAction {
    type: typeof REMOVE_FAVORITE;
    index: number;
}

export const GET_FAVORITES = "GET_FAVORITES";
export interface GetFavoritesAction {
    type: typeof GET_FAVORITES;
    favorites: any[];
}

export type MoviesAction =
    | SearchMovieRequestAction
    | SearchMovieSuccessAction
    | SearchMovieFailureAction
    | GetMovieRequestAction
    | GetMovieSuccessAction
    | GetMovieFailureAction
    | AddFavoriteAction
    | GetFavoritesAction
    | RemoveFavoriteAction;