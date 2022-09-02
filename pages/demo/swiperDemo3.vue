<template>
  <div>
    <div id="certify">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664051862820476389168727411513&s=2217" /><p>非常难得又值钱的认证证书</p></div>
          <div class="swiper-slide"><img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664052512720476389806006388170&s=2216" /><p>深圳市优秀互联网企业认定证书</p></div>
          <div class="swiper-slide"><img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664053170320476389952286699980&s=2369" /><p>质量管理体系认证荣誉证书</p></div>
          <div class="swiper-slide"><img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664051862820476389168727411513&s=2217" /><p>计算机软件著作权登记证书</p></div>
          <div class="swiper-slide"><img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664053796620476389942922814098&s=2164" /><p>增值电信业务经营许可证</p></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>


    <!-- <div class="index">
      <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="item" v-for="i in 10" :key="i">slide{{i}}</swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-next" class="swiper-button-next" />
        <div slot="button-prev" class="swiper-button-prev" />
      </swiper>
    </div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'

// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: "SwiperDemo2",
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
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
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.$swiper
  //   }
  // },
  methods: {
    initSwiper() {
      var certifySwiper = new Swiper('.swiper-container', {
      watchSlidesProgress: true,
      // slidesPerView: 'auto',
      slidesPerView: 2.5,
      spaceBetween : 20,
      centeredSlides: false,
      loop: true,
      // loopedSlides: 5,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        //clickable :true,
      },
      on: {
        // progress: function(progress) {
        //   // this.slides = document.getElementsByClassName('swiper-slide')
        //   for (var i = 0; i < this.slides.length; i++) {
        //     var slide = this.slides.eq(i);
        //     var slideProgress = this.slides[i].progress;
        //     modify = 1;
        //     if (Math.abs(slideProgress) > 1) {
        //       modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
        //     }
        //     translate = slideProgress * modify * 260 + 'px';
        //     scale = 1 - Math.abs(slideProgress) / 5;
        //     zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        //     slide.transform('translateX(' + translate + ') scale(' + scale + ')');
        //     slide.css('zIndex', zIndex);
        //     slide.css('opacity', 1);
        //     if (Math.abs(slideProgress) > 3) {
        //       slide.css('opacity', 0);
        //     }
        //   }
        // },
        // setTransition: function(transition) {
        //   // this.slides = document.getElementsByClassName('swiper-slide')
        //   for (var i = 0; i < this.slides.length; i++) {
        //     var slide = this.slides.eq(i)
        //     slide.transition(transition);
        //   }

        // }
      }

    })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initSwiper()
    })
    // 悬浮时显示导航菜单
    // this.swiper.el.onmouseover = function () {
    //   this.swiper.navigation.$nextEl.css('display', 'block')
    //   this.swiper.navigation.$prevEl.css('display', 'block')
    // }
    // this.swiper.el.onmouseleave = function () {
    //   this.swiper.navigation.$nextEl.css('display', 'none')
    //   this.swiper.navigation.$prevEl.css('display', 'none')
    // }
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

#certify {
	position: relative;
	width: 1200px;
	margin: 0 auto
}

#certify .swiper-container {
	padding-bottom: 60px;
}

#certify  .swiper-slide {
	width: 520px;
	height: 408px;
	background: #fff;
	box-shadow: 0 8px 30px #ddd;
}
#certify  .swiper-slide img{
	display:block;
}
#certify  .swiper-slide p {
	line-height: 98px;
	padding-top: 0;
	text-align: center;
	color: #636363;
	font-size: 1.1em;
	margin: 0;
}

#certify .swiper-pagination {
	width: 100%;
	bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 5px;
	border: 3px solid #fff;
	background-color: #d5d5d5;
	width: 10px;
	height: 10px;
	opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
	border: 3px solid #00aadc;
	background-color: #fff;
}

#certify .swiper-button-prev {
	left: -30px;
	width: 45px;
	height: 45px;
	// background: url(../images/wm_button_icon.png) no-repeat;
	background-position: 0 0;
	background-size: 100%;
}

#certify .swiper-button-prev:hover {
	background-position: 0 -46px;
	background-size: 100%
}

#certify .swiper-button-next {
	right: -30px;
	width: 45px;
	height: 45px;
	// background: url(../images/wm_button_icon.png) no-repeat;
	background-position: 0 -93px;
	background-size: 100%;
}

#certify .swiper-button-next:hover {
	background-position: 0 -139px;
	background-size: 100%
}

#certify  img{
  max-width: 100%;
  max-height: 100%;
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