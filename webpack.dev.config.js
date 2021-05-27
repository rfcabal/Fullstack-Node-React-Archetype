const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const SRC_DIR = path.resolve(__dirname,'www');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
    }
});

const config = {
    mode: "development",
    devtool: 'inline-source-map',
    context: SRC_DIR,
    entry: [ SRC_DIR + '/src/index.tsx'],
    devServer: {
      port: 3000
    },
    module: {
        rules:  [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]',
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        htmlWebpackPlugin,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = config;
