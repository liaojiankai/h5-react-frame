/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// friendly-errors-webpack-plugin用于更友好地输出webpack的警告、错误等信息
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const fo = require('eslint-friendly-formatter');
const StyleLintPlugin = require('stylelint-webpack-plugin');
// const portfinder = require('portfinder');

const utils = require('./utils');
const config = require('../config');
const baseConfig = require('./webpack.base.conf');

const { HOST } = process.env;
const PORT = process.env.PORT && Number(process.env.PORT);

const resolve = dir => path.join(__dirname, '..', dir);

const devWebpackConfig = merge(baseConfig, {
  mode: 'development',

  devtool: '#eval-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [utils.resolve('src')],
        options: {
          formatter: fo,
          emitWarning: true
        }
      },
    ],
  },

  // 这些devServer选项应该在/config/index.js中定制
  // devServer: {
  //   clientLogLevel: 'warning',
  //   historyApiFallback: {
  //     rewrites: [
  //       {
  //         from: /.*/,
  //         to: path.posix.join(config.assetsPublicPath, 'index.html'),
  //       },
  //     ],
  //   },
  //   hot: true,
  //   contentBase: false, // since we use CopyWebpackPlugin.
  //   compress: true,
  //   host: HOST || config.host,
  //   port: PORT || config.port,
  //   open: config.autoOpenBrowser,
  //   overlay: config.errorOverlay ? { warnings: false, errors: true } : false,
  //   publicPath: config.assetsPublicPath,
  //   proxy: config.proxyTable,
  //   quiet: true, // necessary for FriendlyErrorsPlugin
  //   watchOptions: {
  //     poll: config.poll,
  //   },
  // },

  plugins: [
    // new webpack.NoEmitOnErrorsPlugin()
    new StyleLintPlugin({
      context: 'src',
      files: ['**/*.(c|sa|sc|pc|le)ss'],
      failOnError: false,
      quiet: true,
    })
  ],
});

// module.exports = new Promise((resolve, reject) => {
//   portfinder.basePort = config.port;
//   portfinder.getPort((err, port) => {
//     if (err) {
//       reject(err);
//     } else {
//       // publish the new Port, necessary for e2e tests
//       process.env.PORT = port;
//       // add port to devServer config
//       devWebpackConfig.devServer.port = port;

//       // Add FriendlyErrorsPlugin
//       devWebpackConfig.plugins.push(
//         new FriendlyErrorsPlugin({
//           compilationSuccessInfo: {
//             messages: [
//               `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`,
//             ],
//           },
//           onErrors: config.notifyOnErrors ? utils.createNotifierCallback() : undefined,
//         }),
//       );

//       resolve(devWebpackConfig);
//     }
//   });
// });

module.exports = devWebpackConfig;
