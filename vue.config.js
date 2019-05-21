module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          secure: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/api'
          }
        }
      }
    }
  }
}
