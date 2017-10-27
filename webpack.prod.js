const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: [/\.scss$/, /\.sass$/],
                // include: path.resolve(__dirname, "src/style/"),
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                // include: path.resolve(__dirname, "src/style"),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },

    devtool: 'source-map',

    plugins: [
        new CleanWebpackPlugin(['build']),
        new ExtractTextPlugin('assets/css/[name].css'),
        
    ]
});