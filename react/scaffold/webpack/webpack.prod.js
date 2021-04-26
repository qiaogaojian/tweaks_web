const path = require("path");
const root = path.join(__dirname, "..");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(root, "./app/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(root, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
      }),
    ],
  },
};
