<template>
  <div>
    <p>详情</p>
    <el-button @click="handleLike">测试点赞 {{name}}</el-button>
    <div class="aaa">
      <p>{{detailData.showName}}</p>
      <p>{{detailData.address}}</p>
      <div v-html="detailData.showDescription"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData({ app, params, error, $request }) {
    console.log(222222222)
    console.log('params', params)
    let { id } = params
    return app.$api.getExhibitionDetailData({
        id: id
      }).then(res => {
        // console.log(234, res.data)
        return { detailData: res.data }
      }).catch(e => {
        error({ statusCode: 404, message: 'Post not found' })
      })
    // return $request
    //     // .get(`http://www.jnmuseum.com/admin/pc/esaleShow/getShowDetail.do?id=${id}`)
    //   .get(`/pc/esaleShow/getShowDetail.do`, {
    //     id: id
    //   }).then(res => {
    //     // console.log(234, res.data)
    //     return { detailData: res.data }
    //   }).catch(e => {
    //     error({ statusCode: 404, message: 'Post not found' })
    //   })
  },
  data() {
    return {
      detailData: {},
      name: ''
    }
  },
  methods: {
    getData() {
      // console.log(111)
    },
    async handleLike() {
      // console.log(this.detailData)
      this.$api.getExhibitionDetailData({
        id: this.$route.params.id
      }).then(res => {
        console.log(11, res)
        this.name = res.data.showName
      })
    }
  },
  mounted() {
    console.log(11111111111)
    // this.getData()
  }
}
</script>