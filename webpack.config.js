const path = require('path')
const validate = require('webpack-validator')
const webpack = require('webpack')
const { version } = require('./package.json')

module.exports = validate({
  entry: {
    'index': './src/index'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      VERSION: `v${version}`
    })
  ].concat(process.env.NODE_ENV === 'production'
    ? new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }) : [])
})
