var webpackConfig = require('./webpack.dev.config.js');

module.exports = (config) => {
    config.set({
        // ... normal karma configuration
        browsers: [ 'Chrome' ], //run in Chrome
        frameworks: [ 'jasmine' ], //use the mocha test framework
        reporters: ["mocha", 'kjhtml'],
        client:{
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        colors:  true,
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
        },
        plugins: [
            "karma-webpack",
            "karma-jasmine",
            "karma-chrome-launcher",
            "karma-jasmine-html-reporter",
            "karma-mocha-reporter"
        ],
    })
}