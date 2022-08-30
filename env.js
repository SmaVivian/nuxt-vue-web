module.exports = {
  // 开发环境
  dev: {
    NODE_ENV: 'development',
    BASE_API: '/admin' // 开发服务器地址
  },
  // 生产环境
  pro: {
    NODE_ENV: 'production',
    BASE_API: 'http://www.jnmuseum.com/admin' // 正式服务器地址
  }
}