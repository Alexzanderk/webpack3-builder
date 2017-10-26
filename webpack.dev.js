const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    module: {
        rules: [{
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
        ]
    },
    
    devtool: 'cheap-eval-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true

    }

});




