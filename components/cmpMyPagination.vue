<template>
  <!-- 分页 -->
  <div class="pagination-container">
    <!-- layout="total, prev, pager, next, sizes" -->
    <!-- @size-change="handleSizeChange" -->
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      background
      layout="total, prev, pager, next"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
  },
  // watch: {
  //   $route: {
  //     handler(Val) {
  //       return this.getBreadcrumb()
  //     },
  //     immediate: true
  //   },
  //   '$store.state.app.breadcumbList': function(newVal) {
  //     if(this.$route.meta.useStore) {
  //       this.breadList = newVal
  //     }
  //   }
  // },
  data() {
    return {
      // currentPage: 1
    }
  },
  methods: {
    // handleSizeChange(val) {
    //   this.pageSize = val
    //   this.$emit('eventPage', {
    //     currentPage: this.currentPage,
    //     size: this.pageSize
    //   })
    // },
    handleCurrentChange(val) {
      this.$emit('eventPage', {
        currentPage: val,
        size: this.pageSize
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  
}
</style>
