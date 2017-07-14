'use strict';
import 'ignore-styles';
import app from './app';

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log('Running server..');
});