const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",

  // Enable sourcemaps for debugging webpack's output
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: require("./ant-theme-overrides"),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // Used to decrease momentjs bundle size
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    // new BundleAnalyzerPlugin()
  ],

  // Used to decrease momentjs bundle size
  resolve: {
    alias: { moment: `moment/moment.js` },
  },

  // Dev server options
  devServer: {
    port: 8080,
    historyApiFallback: true,
    inline: true,
  },
});
