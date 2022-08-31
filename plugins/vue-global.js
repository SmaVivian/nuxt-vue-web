import '~/assets/scss/element-variables.scss' // elementUI 自定义主题色
import utils from '~/utils/utils'

// Vue.filter('formatTime', d => utils.formatTime(d))

export default function (context, inject) {
  inject('utils', utils)
}