<template>
  <div class="learn-list-box">
    <div class="type-info">
      <img :src="learn" />
      <div>
        <div class="type-name">{{title}}</div>
        <div class="learn-number" v-if="title !== '重要通知'">{{(list.length) || 0}}个培训材料</div>
      </div>
    </div>

    <div class="list-container">
      <div class="title" v-if="title !== '重要通知'">培训材料列表</div>

      <template v-for="(item, idx) in list">
        <div class="course-item" :key="idx" @click="toLearnDetails(item)">
          <div class="title">{{item.level3}}</div>
        </div>
      </template>

      <!-- <template v-for="(item, idx) in list">
        <div class="learn-item" v-if="item.type === '1'" :key="idx" @click="toLearnDetails(item.url, 'MP4')">
          <h3 class="title">{{item.level3}}</h3>
          <div class="to-learn"><span>去学习&gt;&gt;</span></div>
        </div>

        <div class="learn-pdf" v-else :key="idx" @click="toLearnDetails(item.url, 'PDF')">
          <mt-cell :title="item.level3" is-link></mt-cell>
        </div>
      </template> -->
    </div>
  </div>
</template>

<script>
import learn from '../../assets/learn/learn.png';

export default {
  components: {},
  data() {
    return {
      list: [],
      title: '',
      learn,
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
    toLearnDetails (item) {
      const url = item.type === '1' ? item.url : item.img
      const type = item.type === '1' ? 'MP4' : 'PDF'
      this.$router.push(`/learnDetails?url=${url}&type=${type}`)
    }
  }
};
</script>
<style lang='scss'>
.learn-list-box {
  padding: .4rem .2rem .2rem;

  .type-info {
    display: flex;
    align-items: center;
    padding-left: .05rem;
    > img {
      width: auto;
      height: 1.21rem;
      border-radius: .12rem;
      margin-right: .2rem;
    }
    > div {
      flex: 1;
      .type-name {
        font-size: .16rem;
        line-height: .2rem;
        font-weight: bold;
        color: #333333;
        margin-bottom: .08rem;
      }
      .type-desc {
        font-size: .12rem;
        color: #CCCCCC;
        line-height: .2rem;
        margin-bottom: .11rem;
      }
      .learn-number {
        font-size: .12rem;
        color: #6F6C6C;
      }
    }
  }

  .list-container {
    >.title {
      font-size: .16rem;
      font-weight: bold;
      line-height: .2rem;
      color: #333333;
      margin-top: .5rem;
      margin-bottom: .09rem;
    }
    .course-item {
      border-top: 1px solid rgb(240, 240, 240);
      .title {
        font-size: .14rem;
        line-height: .26rem;
        color: #333;
        padding: .2rem 0;
      }
    }

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
