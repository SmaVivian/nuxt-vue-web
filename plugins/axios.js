export default function ({ app: { $axios } }) {
  // $axios.defaults.baseURL = 'http://www.jnmuseum.com'  // 设置无效
  // $axios.defaults.baseURL = process.env.baseUrl
	// $axios.defaults.timeout = 30000
  // 创建axios实例
  // let service = $axios.create({
  //   // baseURL: '/admin', // api 的 base_url  设置无效
  //   // baseURL: process.env.BASE_API, // api 的 base_url  设置无效
  //   timeout: 60000 // 请求超时时间
  // })

	$axios.interceptors.request.use(
    config => {
      console.log('------', config)
      // config.headers['X-Token'] = $cookies.get('token') || ''
      // config.headers['X-Device-Id'] = $cookies.get('clientId') || ''
      // config.headers['X-Uid'] = $cookies.get('userId') || ''
      return config
	  },
    error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    }
  )

	$axios.interceptors.response.use(
    response => {
      console.log('res', response)
      // if (/^[4|5]/.test(response.status)) {
      //   return Promise.reject(response.statusText)
      // }
      // return response.data

      /**
       * code为非20000是抛错 可结合自己业务进行修改
       */
      const res = response.data

      // if (res.code !== 20000) {
      //   Message({
      //     message: res.message,
      //     type: 'error',
      //     duration: 5 * 1000
      //   })

      //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //     MessageBox.confirm(
      //       '你已被登出，可以取消继续留在该页面，或者重新登录',
      //       '确定登出',
      //       {
      //         confirmButtonText: '重新登录',
      //         cancelButtonText: '取消',
      //         type: 'warning'
      //       }
      //     ).then(() => {
      //       store.dispatch('FedLogOut').then(() => {
      //         location.reload() // 为了重新实例化vue-router对象 避免bug
      //       })
      //     })
      //   }
      //   return Promise.reject('error')
      // } else {
      //   return response.data
      // }

      return res
	  },
    error => {
      // if (error.response.status === 999) {
      //   MessageBox.alert('', '登录超时，请重新登录', {
      //     confirmButtonText: '确定',
      //     callback: () => {
      //       store.dispatch('LoginOut').then(() => {
      //         location.reload() // 为了重新实例化vue-router对象 避免bug
      //       })
      //     }
      //   })
      // } else {
      //   console.log(error)
      //   Message({
      //     message: error.message,
      //     type: 'error',
      //     duration: 5 * 1000
      //   })
      //   return Promise.reject(error)
      // }
      return Promise.reject(error)
    }
  )
}