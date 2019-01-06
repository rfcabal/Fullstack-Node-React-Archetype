const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
});

module.exports = {
    context: __dirname + "/www",
    entry: __dirname + "/www/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    module: {
        rules:  [
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2'],
                    }
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]',
                    }
                }
            },
        ]
    },
    plugins: [htmlWebpackPlugin]
};


