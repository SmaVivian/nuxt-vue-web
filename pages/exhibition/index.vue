<template>
  <div class="page-a">
    <p>环境</p>
    <p class="name ell" style="width:200px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo asperiores, eveniet non beatae earum hic ipsam! Soluta vero cupiditate vitae blanditiis debitis asperiores iste sed, molestiae libero amet impedit. Amet?</p>
    <el-button type="primary">同意</el-button>

    <p>跳转1不推荐</p>
    <div v-for="(item, i) in dataList" :key="i">
      <!-- <p @click="toDetail(item.id)">名称：{{item && item.showName}}</p> -->
      <nuxt-link :to="`/exhibition/${item.id}`">{{item.showName}}</nuxt-link>

      <!-- 推荐使用nuxt-link，跳转页面，更利于seo收录，使用this.$router.push跳转相同路由存在一些问题。 -->
      <!-- <nuxt-link :to="`/new/${item.id}`" :title="item.title">
      </nuxt-link> -->
    </div>
    <br>
    <br>

    <p>跳转2不推荐</p>
    <div v-for="(item, i) in dataList" :key="i">
      <p @click="toDetail(item.id)">名称：{{item && item.showName}}</p>

      <!-- 推荐使用nuxt-link，跳转页面，更利于seo收录，使用this.$router.push跳转相同路由存在一些问题。 -->
      <!-- <nuxt-link :to="`/new/${item.id}`" :title="item.title">
      </nuxt-link> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // asyncData({ params }) {
  //   console.log(params)
  //   axios.get(`/admin/pc/esaleShow/getListData.do?type=1&museumId=&currentPage=1&size=9`).then(res => {
  //     console.log(2223, res)
  //     return res.data
  //   }).catch(err => {
  //     console.log(333, err)
  //     return {}
  //   })
  //   // return axios.get(`https://my-api/posts/${params.id}`).then(res => {
  //   //   return { title: res.data.title }
  //   // })
  // },
  // async asyncData({ app, query }) {
  //   let res = await app.$api.searchList({
  //     limit: 20,
  //     id_type: query.idType || 0,
  //     key_word: query.keyword,
  //     search_type: query.searchType || 0
  //   })
  //   let pageInfo = {}
  //   let searchList = []
  //   if (res.err_no === 0) {
  //     searchList = res.data
  //     pageInfo = {
  //       hasMore: res.has_more,
  //       cursor: res.cursor
  //     }
  //   }
  //   return {
  //     pageInfo,
  //     searchList,
  //   }
  // },
  asyncData({ params, error, $http }) {
    console.log('env', process.env.NODE_ENV)
    console.log('params', params)
    // return axios
    return $http
      .get(`/admin/pc/esaleShow/getListData.do`, {
        type: 1,
        museumId: '',
        currentPage: 1,
        size: 10
      }).then(res => {
        console.log(234, res)
        return { dataList: res.data }
      }).catch(e => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },
  data() {
    return {
      list: [1, 2, 3],
      dataList: []
    }
  },
  methods: {
    getData() {
      console.log(111)
    },
    toDetail(id) {
      this.$router.push({
        path: `/exhibition/${id}`
      })
      // 静态部署、新开页面跳转
      // window.open(`/exhibition/${id}` + '/index.html')
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.page-a {
  .name {
    color: red;
  }
}
</style>