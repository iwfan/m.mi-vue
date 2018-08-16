module.exports = {
  baseUrl: '/',
  devServer: {
    host: '0.0.0.0',
    port: 3174
  },
  pages: {
    account: {
      entry: 'src/account/index.ts',
      template: 'public/account.html',
      filename: 'account/index.html',
      title: 'account'
    },
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'index'
    }
  }
}
