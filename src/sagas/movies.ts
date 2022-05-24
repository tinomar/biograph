import { put, fork, takeEvery } from 'redux-saga/effects';
import * as actionTypes from "../actionTypes/movies";
import * as actions from '../actionCreators/movies';

export interface ResponseGenerator {
    config?: any,
    data?: any,
    Search?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}

function* searchMovies({ term }: actionTypes.SearchMovieRequestAction) {
    try {
        const result: ResponseGenerator = yield fetch(`http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${term}`);
        yield put(actions.searchMovieSuccess(result.Search));
    } catch (error) {
        console.error("Nastala chyba:", error);
    }
}

function* watchSearchMoviesRequest(): any {
    yield takeEvery(actionTypes.SEARCH_MOVIES_REQUEST, searchMovies);
}

const userSagas = [fork(watchSearchMoviesRequest)];

export default userSagas;