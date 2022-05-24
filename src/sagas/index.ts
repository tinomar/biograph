import { all } from 'redux-saga/effects';
import movieSagas from './movies';

export default function* rootSaga() {
  yield all([...movieSagas]);
}