<template>
  <div class="learn-level-two-box">
    <div class="type-info">
      <img :src="type1" />
      <div>
        <div class="type-name">基础技能篇</div>
        <div class="type-desc">川渝地区旅游文化、旅游政策法规、导游实务知识</div>
        <div class="learn-number">5个专题 | 15个培训课程</div>
      </div>
    </div>
    
    <div class="course-list">
      <div class="title">课程列表</div>

      <div class="course-item">
        <img :src="learn" alt="">
        <div>
          <div class="course-name">川渝地区旅游文化</div>
          <div class="course-number">共5个培训资料</div>
        </div>
      </div>
      <div class="course-item">
        <img :src="learn" alt="">
        <div>
          <div class="course-name">川渝地区旅游文化</div>
          <div class="course-number">共5个培训资料</div>
        </div>
      </div><div class="course-item">
        <img :src="learn" alt="">
        <div>
          <div class="course-name">川渝地区旅游文化</div>
          <div class="course-number">共5个培训资料</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import type1 from '../../assets/learn/type1-1.png';
import type2 from '../../assets/learn/type2-1.png';
import type3 from '../../assets/learn/type3-1.png';
import learn from '../../assets/learn/learn.png';
export default {
  components: {},
  data() {
    return {
      list: [],
      title: '',
      pIdx: '',
      type1,
      type2,
      type3,
      learn,
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
  padding: .2rem 0;

  .type-info {
    display: flex;
    align-items: center;
    padding-left: .05rem;
    > img {
      width: 1.26rem;
      height: 1.21rem;
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

  .course-list {
    margin-top: .37rem;
    padding: 0 .2rem;
    .title {
      font-size: .16rem;
      font-weight: bold;
      line-height: .2rem;
      color: #333333;
      margin-bottom: .09rem;
    }
    .course-item {
      display: flex;
      align-items: center;
      padding-right: .28rem;
      margin-bottom: .27rem;
      > img {
        width: 1.26rem;
        height: .88rem;
        margin-right: .13rem;
        border-radius: .06rem;
      }
      > div {
        flex: 1;
        .course-name {
          font-size: .16rem;
          line-height: .2rem;
          font-weight: bold;
          color: #333333;
          margin-bottom: .08rem;
        }
        .course-number {
          font-size: .12rem;
          color: #CCCCCC;
          line-height: .2rem;
        }
      }
    }
  }
}
</style>
