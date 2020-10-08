<template>
  <div class="footer-box">
    <div class="container-view">
      <router-view></router-view>
    </div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="/learn">
        <img slot="icon" :src="selected === '/learn' ? require('../assets/tabbar/learn-active.png') : require('../assets/tabbar/learn.png')" alt="">
        学习
      </mt-tab-item>
      <mt-tab-item id="/exam">
        <img slot="icon" :src="selected === '/exam' ? require('../assets/tabbar/exam-active.png') : require('../assets/tabbar/exam.png')" alt="">
        考试
      </mt-tab-item>
      <mt-tab-item id="/my">
        <img slot="icon" :src="selected === '/my' ? require('../assets/tabbar/my-active.png') : require('../assets/tabbar/my.png')" alt="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '/learn'
    }
  },
  mounted () {
    this.selected = this.$route.path
  },
  watch: {
    selected () {
      if (this.selected === this.$route.path) {
        return
      }
      this.$router.push(this.selected);
    }
  },
  methods: {
    
  }
}
</script>
<style lang='scss'>
  .footer-box {
    .container-view {
      padding-top: .4rem;
      padding-bottom: .6rem;
    }
  }
</style>