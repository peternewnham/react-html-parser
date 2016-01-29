var webpack = require('webpack');
var path = require('path');

const config = require('./webpack.config.base');

config.entry = [
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server',
  path.join(__dirname, 'src', 'js', 'index.js')
];
config.devtool = 'cheap-module-eval-source-map';
config.module.loaders = config.module.loaders.concat([
  {
    test: /\.js$/,
    include: [
      path.join(__dirname, 'src', 'js')
    ],
    loaders: [
      'react-hot',
      'babel'
    ]
  },
  {
    test:   /\.scss$/,
    include: [
      path.join(__dirname, 'src', 'sass')
    ],
    loader: 'style-loader!css-loader!postcss-loader!sass-loader'
  }
]);

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
]);

module.exports = config;
