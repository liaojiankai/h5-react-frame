const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const utils = require('./utils');
const config = require('../config');

const baseConfig = {

  entry: './src',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[hash:7].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? undefined
      : config.assetsPublicPath,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', 'json5'],
    // modules: [config.srcPath, 'node_modules'],
    alias: {
      '@': path.resolve('../src'),
    },
  },

  optimization: {
    // 包清单
    runtimeChunk: {
      name: 'manifest',
    },
    // 拆分公共包
    splitChunks: {
      cacheGroups: {
        // 第三方组件
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [utils.resolve('src')],
        exclude: /node_modules/,
      },

      {
        test: /\.(css|pcss)$/,
        loader: 'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap',
        exclude: /node_modules/,
        include: [utils.resolve('src')],
      },

      {
        test: /\.(ico|png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },

      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.distPath,
        ignore: ['.*'],
      },
    ]),

    new HtmlWebpackPlugin({
      filename: '../dist/index.html',
      template: config.templatePath,
      inject: true, // true  'head' 'body'
    }),
  ],
};

module.exports = baseConfig;
