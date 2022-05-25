import * as actions from "../actionTypes/movies";

export interface MoviesState {
    movies: any[];
    favorites: any[];
    term: string;
}

const initialState: MoviesState = {
    movies: [],
    favorites: [],
    term: ""
};

export default function moviesReducer(
    state: MoviesState = initialState,
    action: actions.MoviesAction
): MoviesState {
    switch (action.type) {
        case actions.SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                term: action.term
            };
        case actions.SEARCH_MOVIES_SUCCESS:
            console.log("Action movies", action)
            return {
                ...state,
                movies: action.movies
            };
        case actions.ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.favorite],
            };
        case actions.REMOVE_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites.splice(0, action.id), ...state.favorites.splice(1)],
            };
        default:
            return state;
    }
}