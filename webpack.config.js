const path = require("path");
const OutputListWebpackPlugin = require("./build/plugins/output-list-plugin");

const _resolve = function (_path) {
  return path.resolve(__dirname, _path);
};

module.exports = {
  mode: "production",
  entry: _resolve("./src"),
  output: {
    path: _resolve("./pre-dist"),
    filename: "js/[name].[hash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              esModule: false,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "img/[name].[hash:8].[ext]",
                  esModule: false,
                },
              },
            },
          },
          {
            loader: "process-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "process-loader",
          },
          {
            loader: "replace-content-loader",
          },
        ],
      },
    ],
  },
  resolveLoader: {
    alias: {
      "process-loader": path.resolve(
        __dirname,
        "build/loaders/process-loader.js"
      ),
      "replace-content-loader": path.resolve(
        __dirname,
        "build/loaders/replace-content-loader.js"
      ),
    },
  },
  plugins: [new OutputListWebpackPlugin()],
};
