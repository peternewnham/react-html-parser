var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015'
          ],
          plugins: [
            'transform-object-assign'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, 'src')
    ],
    extensions: ['', '.js']
  },
  output: {
    library: 'ReactHtmlParser',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React'
  }
};
