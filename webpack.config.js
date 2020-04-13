const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = (env, argv) => ({
    mode: 'development',

    devtool: 'inline-source-map',

    entry: {
        code: './src/code.ts', // The entry point for your UI code
    },

    module: {
        rules: [
            // Converts TypeScript code to JavaScript
            { test: /\.ts?$/, use: 'babel-loader', exclude: /node_modules/ },
        ],
    },

    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'), // Compile into a folder called "dist"
    },

    devServer: {
        sockPort: 8080,
        allowedHosts: [
            "*"
        ],
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        disableHostCheck: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS"
        }
    }
});
