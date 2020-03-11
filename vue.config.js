module.exports = {
  pwa: {
    themeColor: '#c9c9c9',
    display: 'fullscreen',
    orientation: 'portrait'
  },
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/jel/'
    : '/',
  devServer: {
    port: 80,
    host: '0.0.0.0'
  }
};