import env from './env'
const axios = require('axios')
export default {
  server: {
    port: 8085, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // env: {
  //   // baseUrl: 'http://127.0.0.1:8087'
  //   baseUrl: '/admin',
  //   // baseUrl: env[process.env.NODE_ENV].BASE_API,
  //   NODE_ENV: env[process.env.NODE_ENV].NODE_ENV
  // },
  env: {
    MODE: process.env.MODE,
    baseUrl: env[process.env.MODE].BASE_API
  },

  generate: {
    // dir: "generateDist",
    // concurrency: 10,
    // interval: 100,
    // crawler: false,
    // routes() {}
    // dir：我们生成的静态文件的目录，
    // concurrency：我们在批量生成文件的时候一次产生的文件数量，
    // interval：批量生成文件间隔，
    // crawler：比如我们的页面中有a链接的话，会生成a链接指向的页面的静态页面（早期版本没有提供这个属性），
    // routes：我们想要生成静态页面对应的vue文件路由，它返回一个数组对象
    // routes: [
    //   "exhibition/201904171043221005",
    //   "exhibition/201812131041341000",
    //   "exhibition/201812131039131000",
    //   // "products/categories/1/page/1",
    //   // "products/page/1"
    // ]
    routes: function () {
      return axios.get('http://www.jnmuseum.com/admin/pc/esaleShow/getListData.do?type=2&size=3').then(res => {
        console.log(res.data)
        return res.data.data.map(item => {
          return '/exhibition/' + item.id
        })
      })
    }
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'swiper/swiper-bundle.css',
    'video.js/dist/video-js.css',
    // 'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/reset.css',
    '~/assets/scss/theme.scss'
  ],

  // router: {
  //   middleware: 'i18n'
  //   //   mode: 'hash', // 使用 'hash' 主要是为了适配以相对路径打开的静态站点， 必须使用 'hash' 否则路由跳转不生效
  //   //   // base: '/moli/',
  //   //   // base: process.env.NODE_ENV === 'pro' ? './' : '/', // 使用 './' 主要是为了适配以相对路径打开的静态站点
  //   //   extendRoutes(routes, resolve) {
  //   //     routes.push({
  //   //       path: '/',
  //   //       redirect: {
  //   //         name: 'home'
  //   //         // name: 'exhibition'
  //   //       }
  //   //     })
  //   //   }
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios',
    '~/plugins/request',
    '~/plugins/api.js',
    '~/plugins/vue-global.js',
    '~/plugins/i18n.js',
    { src: '~plugins/video', ssr: false }, // 不启用服务器端渲染
    { src: "~/plugins/swiper.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variable.scss'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  axios: {
    proxy: true,
    // prefix: 'http://www.jnmuseum.com/admin',
    // prefix: '/admin',
    // prefix: env[process.env.MODE].BASE_API,
    // credentials: true
  },
 
  // proxy: {
  //   '/admin': { 
  //     target: 'http://www.jnmuseum.com', // 目标接口域名
  //     ws: false,
  //     changeOrigin: true
  //     // pathRewrite: {
  //     //   '^/admin': '/', // 把 /api 替换成 /
  //     // }    
  //   },
  // },

  proxy: [
    // ['/dog', { target: 'https://dog.ceo/', pathRewrite: { '^/dog': '/api/breeds/image/random' } }]
    ['/admin', { target: 'http://www.jnmuseum.com' }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    // vendor: ['axios']
    // vendor: ['vue-i18n'] // webpack vue-i18n.bundle.js
  }
}
