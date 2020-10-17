let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/mtraining/',
  devServer: {
    open: true,
    port: 8088
  },
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('api', resolve('src/api'))
      .set('images', resolve('src/assets/images'))
      .set('styles', resolve('src/assets/styles'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('assets', resolve('src/assets'))
  }
}