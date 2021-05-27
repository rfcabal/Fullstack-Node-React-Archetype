const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const SRC_DIR = path.resolve(__dirname,'www');
const DIST_DIR = path.resolve(__dirname,'www/dist');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
    }
});

const config = () => {

    return {
        mode: "production",
        context: SRC_DIR,
        entry: SRC_DIR + "/src/index.tsx",
        output: {
            path: DIST_DIR,
            filename: 'js/[name].[hash].js',
            publicPath:  DIST_DIR + '/',
            chunkFilename: 'js/[id].[chunkhash].js',
        },
        module: {
            rules:  [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
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
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            htmlWebpackPlugin,
            new OptimizeCSSPlugin(),
            new CleanWebpackPlugin()
        ]
    }
};

module.exports = config;

