<script>
export default {
  name: "VueSwiper",
  data: () => ({
    list: [1,2,3,4,5,6,7,8,9],
    swiperOption: {
      autoplay: 2000,
      speed: 300,
      loop: true,
      slidesPerView: 6,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }),
  render() {
    const {list, swiperOption} = this
    return (
      <swiper class="swiper" options={swiperOption}>
        {
          list.map(item => (
            <swiper-slide key={item}>
              Slide {item}
            </swiper-slide>
          ))
        }
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    )
  }
};
</script>

<style scoped lang="scss">
.swiper {
  width: 1000px;
  height: 100px;
  background-color: #f1f1f1;
  border-radius: 15px;
  .slide {
    background-color: #fff;
  }
}
</style>