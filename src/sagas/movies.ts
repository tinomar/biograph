import { put, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from "../actionTypes/movies";
import * as actionCreators from '../actionCreators/movies';

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

if(!process.env.REACT_APP_OMDB_API_KEY) {
    throw new Error("OMDB API key was not specified. Check .env file.");
}

export function* searchMovies({ term }: actionTypes.SearchMovieAction) {
    try {
        yield put(actionCreators.searchMovieRequest());
        const result: ResponseGenerator = yield call(fetch, `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${term}`);
        let data: { [key: string]: any } = yield result.json();
        yield put(actionCreators.searchMovieSuccess(data.Search));
    } catch (error: any) {
        yield put(actionCreators.searchMovieFailure(error));
    }
}

export function* getMovie({ id }: actionTypes.GetMovieAction) {
    try {
        yield put(actionCreators.getMovieRequest());
        const result: ResponseGenerator = yield call(fetch, `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`);
        let data: { [key: string]: any } = yield result.json();
        yield put(actionCreators.getMovieSuccess(data));
    } catch (error: any) {
        yield put(actionCreators.getMovieFailure(error));
    }
}

export function* watchSearchMoviesRequest(): any {
    yield takeEvery(actionTypes.SEARCH_MOVIES, searchMovies);
}

export function* watchGetMovieRequest(): any {
    yield takeLatest(actionTypes.GET_MOVIE, getMovie);
}

const userSagas = [fork(watchSearchMoviesRequest), fork(watchGetMovieRequest)];

export default userSagas;