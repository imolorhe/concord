const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'dist-server'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015',
                    'react'
                ],
                plugins: []
            }
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader?classPrefix'
        },
        {
            test: /\.css$/,
            loader: 'ignore-loader'
        }]
    },
    target: 'node',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        setImmediate: false
    },
    externals: nodeExternals()
};
