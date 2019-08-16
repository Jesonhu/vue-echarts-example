const path = require('path');

/**
 * 解析文件目录
 * @param {*} dir.
 */
const resolvePath = (path) => {
  return path.join(__dirname, path);
}

module.exports = {
  publicPath: './',
  assetsDir: 'resources',

  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}