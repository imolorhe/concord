const fs = require('fs');
const path = require('path');

// Get the built index.html page and inject the generated app
export default ({ body, title, initialState }) => {
    let tpl = fs.readFileSync(path.resolve(__dirname, '../build', '_index.html'), 'utf8');
    tpl = tpl.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    // Replace the title if provided
    if (title) {
        tpl = tpl.replace(/<title>.*<\/title>/, `<title>${title}</title>`);
    }

    // Add the initial state if provided
    if (initialState) {
        tpl = tpl.replace('<script id="preload"></script>', `<script id="preload">window.__PRELOADED_STATE__=${JSON.stringify(initialState).replace(/</g, '\\u003c')}</script>`);
    }
    return tpl;
};
