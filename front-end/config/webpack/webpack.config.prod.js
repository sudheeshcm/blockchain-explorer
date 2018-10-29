const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackConfig = require('./webpack.config.common');

const buildPath = path.resolve(__dirname, '../../../public/build/');

const prodConfig = webpackMerge(webpackConfig, {
  mode: 'production',
  output: {
    path: buildPath,
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {},

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new CopyWebpackPlugin([{ from: 'static', to: 'static' }]),
  ],
});

module.exports = prodConfig;
