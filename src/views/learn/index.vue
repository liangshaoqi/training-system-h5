<template>
  <div class="learn-box">
    <div class="spinner-box" v-if="list.length <= 0">
      <mt-spinner type="triple-bounce" :size="58"></mt-spinner>
      <div>加载中...</div>
    </div>

    <div v-else>
      <mt-cell :title="item.levelFirst" is-link v-for="(item, idx) in list" :key="idx" @click.native="toLevelTwo(idx)"></mt-cell>
    </div>
  </div>
</template>

<script>
import { getLearnList } from 'api/learn';
import { getCardNo } from 'utils/storage';

export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getLearnListFunc()
  },
  methods: {
    getLearnListFunc () {
      getLearnList({
        cardNo: getCardNo() || ''
      }).then(res => {
        const { code, data = [] } = res

        if (code === '200') {
          this.list = data
          this.$store.commit('setLearnList', data)
        }
      })
    },
    toLevelTwo (idx) {
      this.$router.push('/learnLevelTwo?idx=' + idx)
    }
  }
}
</script>
<style lang='scss'>
  .learn-box {
    .spinner-box {
      margin-top: 1rem;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      > div {
        color: #ccc;
        font-size: 0.18rem;
        line-height: 0.8rem;
      }
    }
  }
</style>
