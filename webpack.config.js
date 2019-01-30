const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },

  // Dev server options
  devServer: {
    port: 8080,
    historyApiFallback: true,
    inline: true,
  },
});
