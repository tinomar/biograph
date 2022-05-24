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
    movies: any[]
}

export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";
export interface SearchMovieFailureAction {
    type: typeof SEARCH_MOVIES_FAILURE;
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
    id: number;
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
    | AddFavoriteAction
    | GetFavoritesAction
    | RemoveFavoriteAction;