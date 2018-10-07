const FlowStatusWebpackPlugin = require("flow-status-webpack-plugin");
const webpack = require('webpack');

const environment = require('./environment');

environment.loaders.prepend(
  'Eslint',
  {
    enforce: "pre",
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
    options: {
      failOnError: true
    }
  }
);

environment.plugins.prepend(
  'DefinePlugin',
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("development"),
    API_HOST: JSON.stringify("http://localhost:3000")
  })
);

environment.plugins.prepend(
  'FlowStatusWebpackPlugin',
  new FlowStatusWebpackPlugin({
    failOnError: true
  })
);

module.exports = environment.toWebpackConfig();
