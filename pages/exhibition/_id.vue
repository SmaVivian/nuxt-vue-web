<template>
  <div>
    <p>详情</p>
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
  asyncData({ params, error, $http }) {
    console.log('params', params)
    let { id } = params
    return $http
        // .get(`http://www.jnmuseum.com/admin/pc/esaleShow/getShowDetail.do?id=${id}`)
      .get(`/pc/esaleShow/getShowDetail.do`, {
        id: id
      }).then(res => {
        console.log(234, res.data)
        return { detailData: res.data }
      }).catch(e => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },
  data() {
    return {
      detailData: {}
    }
  },
  methods: {
    getData() {
      console.log(111)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>