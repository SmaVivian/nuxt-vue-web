<template>
  <!-- 文创 -->
  <div class="page-creative">
    <div class="g-content-wrap">
      <div class="list g-card-list">
        <div class="item g-card-1" v-for="(item, index) in dataList" :key="index" @click="goDetail(item)">
          <div class="pic-box">
            <img v-lazy="item.pageUrl" alt="">
          </div>
          <div class="info">
            <h2>{{item.showName}}</h2>
            <div class="desc">
              <p>{{item.musExhibition}}</p>
              <p class="price"><i class="mr-5">¥</i>25</p>
            </div>
          </div>
        </div>

        <!-- 无数据 -->
        <div class="g-no-data" v-if="dataList.length === 0 && !listLoading">
          <div class="no-data-bg"></div>
          <p class="txt text-center">暂无数据</p>
        </div>
      </div>

      <cmpMyPagination :currentPage="listQuery.currentPage" :pageSize="listQuery.size" :total="total" @eventPage="eventPage"></cmpMyPagination>
    </div>
  </div>
</template>

<script>
export default {
  // asyncData({ app, query, params, $request }) {
  //   console.log(query)
  //   console.log('params', params)
  //   return app.$api.getExhibitionData({
  //       // type: 1,
  //       type: 2,
  //       museumId: '',
  //       currentPage: 1,
  //       size: 6
  //     }).then(res => {
  //       // console.log(234, res.data)
  //       return { 
  //         dataList: res.data,
  //         total: res.page.allRow
  //       }
  //     })
  // },
  watchQuery: ['currentPage'],
  data() {
    return {
      dataList: [],
      listQuery: {
        currentPage: 1,
        size: 6,
      },
      total: 0,
      listLoading: false,
    }
  },
  methods: {
    getDataList() {
      // this.listLoading = true
      // this.$http
      //   .get('/wenChuang/getList.do', {
      //     ...this.listQuery
      //   })
      //   .then(res => {
      //     this.listLoading = false
      //     if (res.success) {
      //       this.dataList = res.data
      //       this.total = res.page.allRow
      //     } else {
      //       this.$message.error(res.message)
      //     }
      //   })

      this.listLoading = true
      this.$api.getExhibitionData({
        // type: 1,
        type: 2,
        museumId: '',
        ...this.listQuery
      }).then(res => {
          this.listLoading = false
          if (res.success) {
            this.dataList = res.data
            this.total = res.page.allRow
          } else {
            this.$message.error(res.message)
          }
        })
    },
    eventPage(obj) {
      this.listQuery.currentPage = obj.currentPage
      this.listQuery.size = obj.size
      this.getDataList()

      // this.$router.push({ name: 'photo', query: { currentPage: obj.currentPage } })
    },
    goDetail(item) {
      this.$router.push({
        path: '/creative/detail',
        query: {id: item.id}
      })
    },
  },
  created() {
    this.getDataList()
  }
}
</script>

<style lang="scss" scoped>
.page-creative {
  
}
</style>

