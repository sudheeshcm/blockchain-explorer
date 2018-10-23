const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfig = require('./webpack.config.common');

const buildPath = path.resolve(__dirname, '../../dist/');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8000';

const devConfig = webpackMerge(webpackConfig, {
  mode: 'development',
  output: {
    path: buildPath,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },

  module: {},

  devServer: {
    contentBase: buildPath,
    compress: true,
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: 'static', to: 'static' }]),
  ],
});

module.exports = devConfig;
