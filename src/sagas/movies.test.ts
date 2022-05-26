import { takeEvery, put, call } from 'redux-saga/effects';
import { searchMovieRequest } from '../actionCreators/movies';
import * as actionTypes from "../actionTypes/movies";
import { searchMovies, watchSearchMoviesRequest } from './movies';

describe('Search movies', () => {
    const term = "The blockbuster";
    const iterator = searchMovies({ term } as actionTypes.SearchMovieAction);

    it('should wait for every SEARCH_MOVIES action and call watchSearchMoviesRequest', () => {
        /*
        const requestSearchMovies = jest.spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => Promise.resolve([]),
            } as any));
        */
        expect(iterator.next().value)
            .toEqual(put(searchMovieRequest()));

        // expects a call instruction
        expect(iterator.next().value)
            .toEqual(call(fetch, `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${term}`));

        /*
         expect(iterator.next().value)
             .toEqual(takeEvery(actionTypes.SEARCH_MOVIES, watchSearchMoviesRequest));
 
         requestSearchMovies.mockClear();
         */
    });

    /*
    it('should be done on next iteration', () => {
        expect(iterator.next().done).toBeTruthy();
    });
    */
});