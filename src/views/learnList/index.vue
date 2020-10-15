<template>
  <div class="learn-list-box">
    <mt-header fixed :title="title || '2020成都市导游人员提升培训系统'">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <div class="list-container">
      <template v-for="(item, idx) in list">
        <div class="learn-item" v-if="item.type === 'MP4'" :key="idx" @click="toLearnDetails(item.url)">
          <h3 class="title">{{item.level3}}</h3>
          <div class="to-learn"><span>去学习&gt;&gt;</span></div>
        </div>

        <div class="learn-pdf" v-else :key="idx" @click="toPDF(item.url)">
          <mt-cell :title="item.level3" is-link></mt-cell>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
      title: ''
    };
  },
  mounted () {
    const learnList = this.$store.state.learnList || []
    const pIdx = this.$route.query ? this.$route.query.pIdx : 0
    const cIdx = this.$route.query ? this.$route.query.cIdx : 0
    const info = learnList[pIdx].levelSecondInfo[cIdx] || {}

    this.title = info.levelSecond || ''
    this.list = info.infos || []
  },
  methods: {
    toLearnDetails (url) {
      this.$router.push(`/learnDetails?url=${url}`)
    },
    toPDF (url) {
      window.open(url)
    }
  }
};
</script>
<style lang='scss'>
.learn-list-box {
  padding: .6rem .2rem.2rem;
  .list-container {
    .learn-item {
      background: #fff;
      margin-bottom: .2rem;
      position: relative;
      border-radius: .1rem;
    }
    .learned {
      display: inline-block;
      width: .5rem;
      color: #fff;
      height: .3rem;
      line-height: .3rem;
      text-align: center;
      position: absolute;
      top: .05rem;
      right: .1rem;
      background: #68a568;
    }
    .title {
      width: 100%;
      font-size: .16rem;
      height: .4rem;
      line-height: .4rem;
      margin: 0;
      padding: 0 .1rem;
    }
    .to-learn {
      height: 1.5rem;
      width: 100%;
      color: #fff;
      text-align: center;
      font-size: .2rem;
      line-height: 1.5rem;
      border-radius: .1rem;
      background: url('../../assets/learn/learn-bg.png') no-repeat 50%;
      background-size: cover;
      box-sizing: border-box;
      position: relative;
      span {
        position: relative;
        z-index: 1;
      }
      &::after {
        display: block;
        content: ' ';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba($color: #000000, $alpha: .3);
      }
    }

    .learn-pdf {
      border: 3px solid #26a2ff;
      border-radius: .1rem;
      padding: .1rem;
      box-sizing: border-box;
      margin-bottom: .2rem;
    }
  }
}
</style>
