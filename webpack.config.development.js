var webpack = require('webpack');
var config = require('./webpack.config.base');

var config = Object.create(config);

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
];

module.exports = config;