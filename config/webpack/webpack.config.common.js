const webpack = require('webpack');
const path = require('path');

require('dotenv').config();

const config = {
  output: {
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  entry: {
    vendor: './src/vendor.js',
    app: './src/index.jsx',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: './config/postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[hash:4].[ext]',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          'file-loader?name=fonts/[name].[hash:4].[ext]&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=fonts/[name].[hash:4].[ext]',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          'file-loader?name=images/[name].[hash:4].[ext]&mimetype=image/svg+xml',
      },
    ],
  },

  resolve: {
    alias: {
      '@Root': path.resolve(__dirname, '../../src/'),
      '@Components': path.resolve(__dirname, '../../src/components'),
      '@Constants': path.resolve(__dirname, '../../src/constants'),
      '@Utils': path.resolve(__dirname, '../../src/utils'),
      '@Scenes': path.resolve(__dirname, '../../src/scenes'),
      '@Services': path.resolve(__dirname, '../../src/services'),
      '@Styles': path.resolve(__dirname, '../../src/styles'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      ENV: process.env.ENV || 'development',
    }),
  ],
};

module.exports = config;
