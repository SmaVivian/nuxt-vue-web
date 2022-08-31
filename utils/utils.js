const moment = require('moment');
moment.locale('zh-CN');

export default {
  /**
   * 格式化时间
   * @param {number} timestamp - 13位时间戳
   */
  formatTime(timestamp) {
    if (!timestamp) {
      return ''
    }
    timestamp = timestamp.toString()
    const date = new Date(timestamp.length == 10 ? timestamp * 1000 : timestamp)
    if (date == 'Invalid Date') {
      return ''
    }
    return moment([date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()]).fromNow()
  },
  /**
   * 格式化日期
   * @param {string} format - 格式
   * @param {number} timestamp - 13位时间戳
   */
  formatDate(format, timestamp) {
    if (!timestamp) {
      return ''
    }
    return moment(timestamp).format(format)
  }
}