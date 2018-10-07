const webpack = require('webpack');

const environment = require('./environment');

environment.plugins.prepend(
  'DefinePlugin',
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production"),
    API_HOST: JSON.stringify("Update Me")
  })
);

module.exports = environment.toWebpackConfig();
