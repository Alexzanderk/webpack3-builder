'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src/js"),

    entry: {
        index: "./index.js",
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "build.js",
    },

    devtool: 'cheap-eval-source-map',

    resolve: {
        extensions: [".tsx", ".ts", "jsx", ".js"]
    },

    // externals : {  // Работа  с CDN библиотекой - без установки библиотеки
    //     _: 'lodash'
    //   },  

    module: {
        rules: [
            {
                test: /\.js?$/,
                include: path.resolve(__dirname, "src/js"),
                // exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    },

                }
            },
            {
                test: /\.ts?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            },
            {
                test: [/\.scss$/, /\.sass$/],
                use: [{
                    loader: "style-loader",
                    options: {
                        sourceMap: true,
                        convertToAbsoluteUrls: true
                    }
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader",
                    options: {
                        // includePaths: path.resolve("./src/style"),
                        sourceMap: true
                    }
                }]
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/temlates") + '/index.pug'
        }),
        // new webpack.ProvidePlugin({
        //     _: 'lodash'
        // })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true

    }


}