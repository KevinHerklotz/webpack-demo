var webpack = require("webpack"),
    production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        bundle1: "./entry1.js",
        bundle2: "./entry2.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "/dist/",
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("commons", "commons.js")
    ],
    devtool: production ? false : 'source-map'
};
