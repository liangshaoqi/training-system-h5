<template>
  <div class="learn-box">
    <div class="spinner-box" v-if="list.length <= 0">
      <mt-spinner type="triple-bounce" :size="58"></mt-spinner>
      <div>加载中...</div>
    </div>

    <div v-else>
      <mt-swipe class="learn-swiper">
        <mt-swipe-item>
          <img class="learn-swiper-img" :src="Banner1" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="learn-swiper-img" :src="Banner1" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="learn-swiper-img" :src="Banner1" alt="">
        </mt-swipe-item>
      </mt-swipe>

      <div class="course-type">
        <div class="title">课程分类</div>

        <div class="type-item" @click="toLevelTwo">
          <img :src="type1Icon" alt="">
          <div>
            <div class="type-name">基础技能篇</div>
            <div class="type-desc">川渝地区旅游文化、旅游政策法规、导游实务知识</div>
          </div>
        </div>
        <div class="type-item" @click="toLevelTwo">
          <img :src="type2Icon" alt="">
          <div>
            <div class="type-name">技能提升篇</div>
            <div class="type-desc">旅游安全及突发事件应急技巧、导游带团（经验、技巧）分享交流</div>
          </div>
        </div>
        <div class="type-item" @click="toLevelTwo">
          <img :src="type3Icon" alt="">
          <div>
            <div class="type-name">创新篇</div>
            <div class="type-desc">导游职业规划、川渝两地金牌（大师）导游在线直播</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLearnList } from 'api/learn';
import { getCardNo } from 'utils/storage';
import Banner1 from '../../assets/learn/banner1.png';
import type1Icon from '../../assets/learn/type1.png';
import type2Icon from '../../assets/learn/type2.png';
import type3Icon from '../../assets/learn/type3.png';

export default {
  data () {
    return {
      list: [1,2,3],
      Banner1,
      type1Icon,
      type2Icon,
      type3Icon,
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
    padding-top: .2rem;
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

    .learn-swiper {
      height: 2.77rem;
      margin: 0 .2rem;
      border-radius: .12rem;
      .learn-swiper-img {
        width: 100%;
        height: 100%;
        border-radius: .12rem;
      }
    }

    .course-type {
      margin-top: .37rem;
      .title {
        font-size: .16rem;
        font-weight: bold;
        line-height: .2rem;
        color: #333333;
        margin-bottom: .09rem;
        margin-left: .2rem;
      }
      .type-item {
        display: flex;
        align-items: center;
        padding-right: .28rem;
        > img {
          width: 1.26rem;
          height: .88rem;
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
          }
        }
      }
    }
  }
</style>
