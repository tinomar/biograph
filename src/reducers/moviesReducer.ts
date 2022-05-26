import * as actions from "../actionTypes/movies";

export interface MoviesState {
    items: any[];
    displayedItem: any | null;
    favorites: any[];
    term: string;
}

const initialState: MoviesState = {
    items: [],
    displayedItem: null,
    favorites: [],
    term: ""
};

export default function moviesReducer(
    state: MoviesState = initialState,
    action: actions.MoviesAction
): MoviesState {
    let favorites = [];
    switch (action.type) {
        case actions.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                items: action.items
            };
        case actions.GET_MOVIE_SUCCESS:
            return {
                ...state,
                displayedItem: action.data
            };
        case actions.ADD_FAVORITE:
            favorites = [...state.favorites, action.favorite];
            localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
            return {
                ...state,
                favorites,
            };
        case actions.REMOVE_FAVORITE:
            favorites = [...state.favorites.splice(0, action.index), ...state.favorites.splice(1)];
            localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
            return {
                ...state,
                favorites,
            };
        default:
            return state;
    }
}