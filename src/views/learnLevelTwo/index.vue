<template>
  <div class="learn-level-two-box">
    <mt-header fixed :title="title || '2020年成德眉资导游人员线上培训系统'">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <mt-cell :title="item.levelSecond" is-link v-for="(item, idx) in list" :key="idx" @click.native="toDetails(idx)"></mt-cell>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
      title: '',
      pIdx: ''
    };
  },
  mounted () {
    const learnList = this.$store.state.learnList || []
    const idx = this.$route.query ? this.$route.query.idx : 0
    const info = learnList[idx] || {}

    this.title = info.levelFirst
    this.list = info.levelSecondInfo
    this.pIdx = idx
  },
  methods: {
    toDetails (idx) {
      this.$router.push(`/learnList?pIdx=${this.pIdx}&cIdx=${idx}`)
    }
  }
};
</script>
<style lang='scss'>
.learn-level-two-box {
  padding: .4rem 0 .2rem;
}
</style>
