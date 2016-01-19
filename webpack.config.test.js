var path = require('path');
var webpackConfig = require('./webpack.config.base');
webpackConfig.watch = true;
webpackConfig.isparta = {
  embedSource: true,
  noAutoWrap: true
};
webpackConfig.module.preLoaders = [
  {
    test: /\.jsx?$/,
    include: path.join(__dirname, 'src'),
    loader: 'isparta'
  }
];
delete webpackConfig.externals;
delete webpackConfig.output;

module.exports = webpackConfig;