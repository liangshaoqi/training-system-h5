<template>
  <div class="footer-box">
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="/exam">
        <img slot="icon" class="exam-icon" :src="selected === '/exam' ? require('../assets/tabbar/exam-active.png') : require('../assets/tabbar/exam.png')" alt="">
        考试
      </mt-tab-item>
      <mt-tab-item id="/learn">
        <img slot="icon" class="exam-icon" :src="selected === '/learn' ? require('../assets/tabbar/exam-active.png') : require('../assets/tabbar/exam.png')" alt="">
        学习
      </mt-tab-item>
      <mt-tab-item id="/my">
        <img slot="icon" class="my-icon" :src="selected === '/my' ? require('../assets/tabbar/my-active.png') : require('../assets/tabbar/my.png')" alt="">
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
  .footer-box .mint-tabbar {
    width: 100%;
    box-shadow: 0px 0px 1px 0px #E6E6E6;
    background-color: #fff;
    background-image: none;
    .mint-tab-item {
      color: #5D5D5D;
      &.is-selected {
        color: #1C61C9;
        background-color: #fff;
      }
      .learn-icon {
        position: absolute;
        width: .64rem;
        height: .64rem;
        top: -.33rem;
        left: 25%;
        transform: translateX(-50%);
      }
      .mint-tab-item-icon {
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .my-icon {
        width: .15rem;
        height: .18rem;
      }
      .exam-icon {
        width: .18rem;
        height: .18rem;
      }
    }
  }
</style>
