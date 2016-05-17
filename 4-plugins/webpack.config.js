var webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: ["./entry.js"],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Demo Title',
            filename: 'demo.html'
        })
    ],
    devtool: production ? false : 'source-map'
};
