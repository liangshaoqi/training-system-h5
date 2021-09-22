<template>
  <div class="exam-home-box">
    <div class="exam-home-title">测试题库</div>
    <div class="exam-type exam-type1">
      <div class="exam-type-header">
        <img :src="type1Icon" alt="">
        <div>
          <div class="exam-type-name">基础技能篇</div>
          <div class="exam-type-number">共5套测试题</div>
        </div>
      </div>

      <div class="exam-item" v-for="(item, idx) in [1,2,3]" :key="idx">
        <i></i>
        <div class="exam-name">测试题</div>
        <span>去测试</span>
      </div>
    </div>

    <div class="exam-type exam-type2">
      <div class="exam-type-header">
        <img :src="type2Icon" alt="">
        <div>
          <div class="exam-type-name">技能提升篇</div>
          <div class="exam-type-number">共5套测试题</div>
        </div>
      </div>

      <div class="exam-item" v-for="(item, idx) in [1,2,3]" :key="idx">
        <i></i>
        <div class="exam-name">测试题</div>
        <span>去测试</span>
      </div>
    </div>

    <div class="exam-type exam-type3">
      <div class="exam-type-header">
        <img :src="type3Icon" alt="">
        <div>
          <div class="exam-type-name">创新篇</div>
          <div class="exam-type-number">共5套测试题</div>
        </div>
      </div>

      <div class="exam-item" v-for="(item, idx) in [1,2,3]" :key="idx">
        <i></i>
        <div class="exam-name">测试题</div>
        <span>去测试</span>
      </div>
    </div>
  </div>
</template>

<script>
  import type1Icon from '../../assets/learn/1.png';
  import type2Icon from '../../assets/learn/2.png';
  import type3Icon from '../../assets/learn/3.png';

  export default {
    name: 'exam-home',
    data () {
      return {
        examTypeList: [],
        type1Icon,
        type2Icon,
        type3Icon,
      }
    },
    mounted() {
      window.scrollTo(0, 0)
      this.getExamTypeList()
    },
    methods: {
      getExamTypeList () {
        this.examTypeList = []
      }
    }
  }
</script>

<style lang='scss'>
  .exam-home-box {
    min-height: 100vh;
    .exam-home-title {
      font-size: .18rem;
      font-weight: bold;
      color: #333333;
      margin: .26rem .2rem .15rem;
    }

    .exam-type {
      .exam-type-header {
        display: flex;
        align-items: center;
        > img {
          width: .9rem;
          height: .7rem;
        }
        > div {
          margin-top: -.05rem;
          .exam-type-name {
            font-size: .16rem;
            font-weight: bold;
            color: #333333;
            margin-bottom: .07rem;
          }
          .exam-type-number {
            font-size: .12rem;
            color: #CCCCCC;
          }
        }
      }

      .exam-item {
        display: flex;
        align-items: center;
        padding: 0 .35rem 0 .4rem;
        margin-bottom: .24rem;
        > i {
          width: .1rem;
          height: .1rem;
          background: linear-gradient(91deg, #B5A9FB 0%, #CBC2FF 100%);
          box-shadow: 0px 3px 15px 0px rgba(172, 161, 240, 0.42);
          border-radius: .05rem;
        }
        > div {
          flex: 1;
          font-size: .15rem;
          color: #333333;
          margin-left: .15rem;
        }
        > span {
          width: .65rem;
          height: .21rem;
          background: linear-gradient(91deg, #B5A9FB 0%, #CBC2FF 100%);
          box-shadow: 0px 3px 15px 0px rgba(172, 161, 240, 0.42);
          border-radius: .11rem;
          font-size: .13rem;
          line-height: .20rem;
          color: #fff;
          text-align: center;
        }
      }
    }

    .exam-type2 {
      .exam-item {
        > i {
          background: linear-gradient(91deg, #F4C57B 0%, #FFD595 100%);
          box-shadow: 0px 3px 15px 0px rgba(245, 198, 124, 0.42);
        }
        > span {
          background: linear-gradient(91deg, #F4C57B 0%, #FFD595 100%);
          box-shadow: 0px 3px 15px 0px rgba(245, 198, 124, 0.42);
        }
      }
    }

    .exam-type3 {
      .exam-item {
        > i {
          background: linear-gradient(91deg, #FD97B0 0%, #FFC3B7 100%);
          box-shadow: 0px 3px 15px 0px rgba(254, 152, 176, 0.42);
        }
        > span {
          background: linear-gradient(91deg, #FD97B0 0%, #FFC3B7 100%);
          box-shadow: 0px 3px 15px 0px rgba(254, 152, 176, 0.42);
        }
      }
    }
  }
</style>