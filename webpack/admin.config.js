const path = require('path')
const webpack = require('webpack')

module.exports = {
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'Pages': path.resolve(__dirname, './../resources/js/Pages'),
            'Shared': path.resolve(__dirname, './../resources/js/Shared'),
        }
    }
}
