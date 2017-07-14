import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { mySaga } from './sagas';
import { questionReducer } from './reducers/questions';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const preloadedState = window.__PRELOADED_STATE__ || {};

// Garbage collect preloaded state
delete window.__PRELOADED_STATE__;

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

let createStoreArgs = [questionReducer];

if (Object.keys(preloadedState).length) {
    createStoreArgs.push(preloadedState);
}
createStoreArgs.push(applyMiddleware(thunk, sagaMiddleware));

// Create store with initial state and middlewares
const store = createStore(...createStoreArgs);

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();
