<template>
  <div>
    <div id="certify">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664051862820476389168727411513&s=2217" />
            <!-- <p>非常难得又值钱的认证证书</p> -->
          </div>
          <div class="swiper-slide">
            <img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664052512720476389806006388170&s=2216" />
            <!-- <p>深圳市优秀互联网企业认定证书</p> -->
          </div>
          <div class="swiper-slide">
            <img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664053170320476389952286699980&s=2369" />
            <!-- <p>质量管理体系认证荣誉证书</p> -->
          </div>
          <div class="swiper-slide">
            <img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664051862820476389168727411513&s=2217" />
            <!-- <p>计算机软件著作权登记证书</p> -->
          </div>
          <div class="swiper-slide">
            <img src="http://lnbwg.dev.tj720.com/singleMuseum/attach/getImg?fileId=165664053796620476389942922814098&s=2164" />
            <!-- <p>增值电信业务经营许可证</p> -->
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar" style="height:5px;margin-top:30px;"></div>
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
      // watchSlidesProgress: true,
      // // slidesPerView: 'auto',
      // slidesPerView: 2.5,
      // spaceBetween : 20,
      // centeredSlides: false,
      // loop: true,
      // // loopedSlides: 5,
      // autoplay: true,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // pagination: {
      //   el: '.swiper-pagination',
      //   //clickable :true,
      // }

      // loop: true,
      slidesPerView: 2.7,
      spaceBetween: -60,
      centeredSlides: false,
      scrollbar: {
        el: '.swiper-scrollbar',
        // hide: true
      },
      on: {
        click: function() {
          console.log(222)
          // if(mySwiper1.clickedIndex !== mySwiper1.activeIndex) return
          // gallery.view(12+mySwiper1.activeIndex)
        }
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
	width: 550px;
	margin: 0 auto;
}

#certify .swiper-container {
	padding-bottom: 60px;
}

#certify  .swiper-slide {
	width: 200px;
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
.swiper-container {
  width: 100%;
  height: 20.75rem;
}
.swiper-container .swiper-slide {
  /* height: 100%; */
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);

  position: relative;
  // left: -60px;
}
.swiper-container .swiper-slide:after {
  content: '';
  position: absolute;
  left:0;
  right:top;
  width:100%;
  height:100%;
  background:rgba(75,67,59,.5);
}
.swiper-container .swiper-slide-active:after {
  background: transparent;
}
.swiper-container .swiper-slide-active,
.swiper-container .swiper-slide-duplicate-active{
  z-index: 2;
  transform: scale(1);
  left: 0;
}
.swiper-container .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-container .swiper-slide-active + .swiper-slide {
  transform: scale(0.9);
  z-index: 1;
  // left: -20px;
}
</style>