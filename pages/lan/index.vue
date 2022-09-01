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
import { mapState, mapMutations } from 'vuex'
export default {
  asyncData({ params, error, $http }) {
    
  },
  computed: {
    ...mapState([
      'locale'
    ]),
  },
  data() {
    return {
      detailData: {}
    }
  },
  methods: {
    ...mapMutations({
      'SET_LANG': 'SET_LANG'
    }),
    // 改变语言
    changeLan() {
      console.log(11, this.locale)
      let locale = this.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = locale
      // this.SET_LANG(locale)   // 方式1
      this.$store.commit('SET_LANG', this.locale === 'zh' ? 'en' : 'zh')   // 方式2
      // this.$cookies.set('lang', locale)
    }
  }
}
</script>