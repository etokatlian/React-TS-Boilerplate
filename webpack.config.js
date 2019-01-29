const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  // Dev server options
  devServer: {
    port: 8080,
    historyApiFallback: true,
    inline: true
  }
});
