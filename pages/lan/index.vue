<template>
  <div>
    <p @click="changeLan">切换语言</p>
    <div class="aaa">
      <p>这是中文 {{ $t('menu.home') }}</p>
      <p>这是英文{{ $t('menu.label') }}</p>
      <p>这是藏语{{ $t('menu.logout') }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData({ params, error, $http }) {
    
  },
  data() {
    return {
      detailData: {}
    }
  },
  methods: {
    // 改变语言
    changeLan() {
      console.log(11)
      // let locale = this.locale === 'zh' ? 'en' : 'zh'
      // this.$i18n.locale = locale
      // this.SET_LANG(locale)
      // this.$cookies.set('lang', locale)
    }
  }
}
</script>