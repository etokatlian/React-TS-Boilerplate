const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/dist"),
    publicPath: "/dist/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  // Dev server options
  devServer: {
    port: 8080,
    historyApiFallback: true,
    inline: true
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
