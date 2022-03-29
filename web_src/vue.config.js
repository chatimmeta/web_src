const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('images', resolve('src/assets/images'))
    
    const urlLoader = config.module.rule('images')
    urlLoader.uses.clear()
    urlLoader
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1024 * 8,
        name: '[path][name].[ext]',
        fallback: 'file-loader',
        context: path.resolve(__dirname, './src'),
        publicPath: './'
      })
  }),
  publicPath: './',
  outputDir: 'immeta',
  indexPath: 'index.html',
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    open: true
  }
}
