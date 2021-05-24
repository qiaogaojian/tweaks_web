const path = require("path");
const root = path.join(__dirname, "..");

// 自动获取可远程访问的ip
const os = require("os");
function getNetworkIp() {
  // 打开的host
  let needHost = "";
  try {
    // 获得网络接口对象
    let network = os.networkInterfaces();
    // 遍历网络接口对象得到ipv4且不为127.0.0.1且internal为fasle(可远程访问)的host
    Object.keys(network).map((item) => {
      // 遍历每个类型的网络地址列表
      network[item].map((sub) => {
        if (
          sub.family === "IPv4" &&
          sub.address !== "127.0.0.1" &&
          !sub.internal
        ) {
          needHost = sub.address;
        }
      });
    });
  } catch (e) {
    needHost = "localhost";
  }
  return needHost;
}

module.exports = {
  mode: "development",
  entry: path.join(root, "./app/index.js"),
  output: {
    // 打包文件名
    filename: "bundle.js",
    // 打包输出目录
    path: path.join(root, "./dist"),
    // 资源引用的公共绝对路径(dev打包目录)
    // publicPath: path.join(root, "./public"),
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
            presets: ["es2015", "react", "stage-0"],
            plugins: ["babel-plugin-transform-runtime"]
          },
        },
      },
    ],
  },
  devServer: {
    // 在html引入静态资源时的根目录(默认为项目根目录)
    contentBase: "./dist",
    // 有时无法访问可能是端口被占用
    port: 8080,
    // 启动webpack-dev-server时的host(设置为0.0.0.0无论是本机ip或127.0.0.1或localhost都会响应请求)
    host: getNetworkIp(),
    // 开启热更新
    hot: true,
    // true启动时和每次保存之后，那些显示的 webpack 包(bundle)信息将被隐藏。错误和警告仍然会显示, 和stats不能一起使用。
    // noInfo: true,
    // inline模式, 默认true在控制台中显示编译打包重新构建的状态
    inline: true,
    // 一切服务都启用gzip 压缩(也可以通过webpack-dev-server --compress启动)
    compress: true,
    // true启用https，false不启用
    https: false,
  },
  // 开启source-map 用途是为了在开发环境中便于调试错误 因为打包过后的代码和源代码不一样很难阅读 source map一般只在开发环境运行 生产环境还是保持混乱的状态防止逻辑暴露
  devtool: "source-map",
};
