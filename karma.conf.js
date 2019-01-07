var webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
    config.set({
        // ... normal karma configuration
        browsers: [ 'Chrome' ], //run in Chrome
        frameworks: [ 'jasmine' ], //use the mocha test framework
        files: [
            // all files ending in "_test"
            { pattern: 'test/*_test.js', watched: false },
            { pattern: 'test/**/*_test.js', watched: false },
            { pattern: 'www/*.spec.js', watched: false },
            { pattern: 'www/**/*.spec.js', watched: false }
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            'test/*_test.js': [ 'webpack' ],
            'test/**/*_test.js': [ 'webpack' ],
            'www/*.spec.js': [ 'webpack' ],
            'www/**/*.spec.js': [ 'webpack' ]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        }
    })
}