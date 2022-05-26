import { put, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from "../actionTypes/movies";
import * as actions from '../actionCreators/movies';

export interface ResponseGenerator {
    config?: any,
    data?: any,
    body?: any,
    Search?: any,
    headers?: any,
    json?: any,
    request?: any,
    status?: number,
    statusText?: string
}

function* searchMovies({ term }: actionTypes.SearchMovieRequestAction) {
    try {
        const result: ResponseGenerator = yield call(fetch, `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${term}`);
        let data: { [key: string]: any } = yield result.json();
        yield put(actions.searchMovieSuccess(data.Search));
    } catch (error: any) {
        console.error("Nastala chyba:", error);
        yield put({type: "MOVIE_SEARCH_FAILED", message: error.message});
    }
}

function* getMovie({ id }: actionTypes.GetMovieRequestAction) {
    try {
        const result: ResponseGenerator = yield call(fetch, `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`);
        let data: { [key: string]: any } = yield result.json();
        yield put(actions.getMovieSuccess(data));
    } catch (error: any) {
        console.error("Nastala chyba:", error);
        yield put({type: "GET_MOVIE_FAILED", message: error.message});
    }
}

function* watchSearchMoviesRequest(): any {
    yield takeEvery(actionTypes.SEARCH_MOVIES_REQUEST, searchMovies);
}

function* watchGetMovieRequest(): any {
    yield takeLatest(actionTypes.GET_MOVIE_REQUEST, getMovie);
}

const userSagas = [fork(watchSearchMoviesRequest), fork(watchGetMovieRequest)];

export default userSagas;