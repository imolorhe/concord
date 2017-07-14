const path = require('path');
import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { questionReducer } from '../src/reducers/questions';
import template from './template';
import App from '../src/App';

const store = createStore(questionReducer, applyMiddleware(thunk));

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

app.get('*', (req, res) => {

    const context = {};
    console.log('SSRing..');
    const appString = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <App/>
            </StaticRouter>
        </Provider>
    );

    // Get the initial state from the redux store
    const preloadedState = store.getState();

    if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        res.redirect(301, context.url)
    } else {
        // we're good, send the response
        res.send(template({
            body: appString,
            title: 'XC',
            initialState: preloadedState
        }));
    }

});

export default app;