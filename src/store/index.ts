import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import { useDispatch } from 'react-redux';
import rootReducer from "../reducers/index";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;