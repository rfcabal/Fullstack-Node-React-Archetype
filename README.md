NEXT Configuration Separare Webpack

    "build:dev": "webpack-dev-server --config ./webpack.dev.config.js",
    "build": "webpack",
    "build:local": "webpack --env.NODE_ENV=local",
    "build:prod": "webpack -p --env.NODE_ENV=production"