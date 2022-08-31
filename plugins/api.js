export default ({ app: { $request } }, inject) => {
  // let prefix = '/admin'
  let prefix = 'http://www.jnmuseum.com/admin'
  inject('api', {
    getExhibitionData (params = {}) {
      return $request.get(prefix + `/pc/esaleShow/getListData.do`, params)
    },
    getExhibitionDetailData (params = {}) {
      return $request.get(prefix + `/pc/esaleShow/getShowDetail.do`, params)
    }
    // /**
    //  * 登录验证
    //  * @param {string} password - 密码
    //  * @param {string} phoneNumber - 手机号码
    //  */
    // loginAuth(data) {
    //   return $request.post('/v2/auth/login', data)
    // },
    // /**
    //  * 身份验证
    //  */
    // isAuth() {
    //   return $request.get('/v2/auth/authentication')
    // },
    // /**
    //  * 获取首页列表
    //  * @param {string} cate_id - 分类id
    //  * @param {string} cursor - 分页标识，加载下一页传入
    //  * @param {string} limit - 条数
    //  * @param {string} sort_type - 0：全部、3：三天内、7：7天内、30：30天内、200：热门、300：最新
    //  * @param {string} feed_type - all：推荐，cate：分类
    //  */
    // getIndexList (data = {}) {
    //   return $request.post('/v2/articles/indexList', data)
    // },
    // /**
    //  * 搜索
    //  * @param {number} id_type - 0：综合、2：文章、9：标签、1：用户
    //  * @param {number} limit - 条数
    //  * @param {string} cursor - 分页标识
    //  * @param {string} key_word - 关键词
    //  * @param {number} search_type - 0：全部、1：一天内、2：一周内、3：三个月内
    //  */
    // searchList (params = {}) {
    //   return $request.get('/v2/articles/search', params)
    // }
  })
}