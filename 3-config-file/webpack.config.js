var webpack = require("webpack"),
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
    devtool: production ? false : 'source-map'
};
