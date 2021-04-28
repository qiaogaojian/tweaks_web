const path = require("path");
const root = path.join(__dirname, "..");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(root, "./app/index.js"),
  output: {
    // 打包文件名
    filename: "bundle.js",
    // 打包输出目录
    path: path.join(root, "./dist"),
    // 资源引用的公共绝对路径
    publicPath: path.join(root, "./public"),
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
