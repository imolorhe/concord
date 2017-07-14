const path = require('path');
import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware, { END } from 'redux-saga';

import { mySaga } from '../src/sagas';
import { questionReducer } from '../src/reducers/questions';
import template from './template';
import App from '../src/App';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(questionReducer, applyMiddleware(thunk, sagaMiddleware));

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {

    const rootTask = sagaMiddleware.run(mySaga);

    const context = {};
    const Root = (
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <App/>
            </StaticRouter>
        </Provider>
    );
    console.log('SSRing..');

    // This will cause the saga tasks to trigger
    renderToString(Root);

    // Notify saga that there will be no more dispatches
    store.dispatch(END);
    // Listen for when the sagas have been run, then render the page
    rootTask.done.then(() => {
        const appString = renderToString(Root);

        // Get the initial state from the redux store
        const preloadedState = store.getState();

        if (context.url) {
            // Somewhere a `<Redirect>` was rendered
            res.redirect(301, context.url)
        } else {
            // we're good, send the response
            res.send(template({
                body: appString,
                title: 'Concord',
                initialState: preloadedState
            }));
        }
    }).catch(err => {
        console.log(err);
    });

});

export default app;