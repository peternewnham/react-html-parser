var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.config.base');

config.entry = [
  path.join(__dirname, 'src', 'js', 'index.js')
];
config.module.loaders = config.module.loaders.concat([
  {
    test: /\.js$/,
    include: [
      path.join(__dirname, 'src', 'js')
    ],
    loaders: [
      'babel'
    ]
  },
  {
    test:   /\.scss$/,
    include: [
      path.join(__dirname, 'src', 'sass')
    ],
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
  }
]);
config.plugins = config.plugins.concat([
  new ExtractTextPlugin('demo.css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
]);

module.exports = config;
