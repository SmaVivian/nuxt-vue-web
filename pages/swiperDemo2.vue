<template>
  <div>
    <div class="index">
      <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="item" v-for="i in 10" :key="i">slide{{i}}</swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-next" class="swiper-button-next" />
        <div slot="button-prev" class="swiper-button-prev" />
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: "SwiperDemo2",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      title: '首页',
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          // 分页可以点击
          clickable: true,
          // 激活的分页小圆点样式
          // bulletActiveClass: 'swiper-bullet-active'
        },
        loop: true,
        autoplay: { delay: 4000 },
        // 左右导航
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    // 悬浮时显示导航菜单
    this.swiper.el.onmouseover = function () {
      this.swiper.navigation.$nextEl.css('display', 'block')
      this.swiper.navigation.$prevEl.css('display', 'block')
    }
    this.swiper.el.onmouseleave = function () {
      this.swiper.navigation.$nextEl.css('display', 'none')
      this.swiper.navigation.$prevEl.css('display', 'none')
    }
  },
  // head () {
  //   return {
  //     title: this.title,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'My custom description'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped lang="scss">
.swiper-box {
  width: 400px;
  height: 100px;
  .item {
    height: 50px;
  }
}
// @theme-color: #c91c1c;
// .swiper-button-prev,.swiper-button-next{
//     display: none;
//  }
//  .swiper-pagination-bullet.swiper-bullet-active{
//   background: @theme-color;
//   opacity: 1;
// }
// .swiper-container{
//   --swiper-navigation-color: @theme-color;/* 单独设置按钮颜色 */
//   --swiper-navigation-size: 30px;/* 设置按钮大小 */
// }
</style>