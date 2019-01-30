const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",

  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.(sa|sc|c)ss$|\.html$/,
      threshold: 2000,
      minRatio: 0.8,
      deleteOriginalAssets: true
    })
  ]
});
