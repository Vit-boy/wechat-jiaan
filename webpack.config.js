var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        'index': './lib/index.js'
	},
	output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'WechatJiaan',
        libraryTarget: 'umd'
	},
	mode: 'production',
	performance: {
        hints: false
    },
    module: {
	}
}