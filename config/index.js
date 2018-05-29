const path = require('path');

const getPath = pathStr => path.resolve(__dirname, pathStr);

module.exports = {
  // path
  srcPath: getPath('../src'),
  distPath: getPath('../dist'),
  templatePath: getPath('../index.tpl.html'),
  assetsSubDirectory: 'static', // 静态子目录
  assetsPublicPath: '/',

  port: 8080,
  host: 'localhost',

  autoOpenBrowser: true, // 自动打开浏览器
  notifyOnErrors: true,

  // https://www.webpackjs.com/configuration/dev-server/#devserver-watchoptions-
  poll: true,
};
