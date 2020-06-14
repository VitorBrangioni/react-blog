import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducersCombined from "./ducks";
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducersCombined,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;