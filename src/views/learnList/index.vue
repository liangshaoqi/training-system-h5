<template>
  <div class="learn-list-box">
    <mt-header fixed title="2020成都">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <div class="spinner-box" v-if="list.length <= 0">
      <mt-spinner type="triple-bounce" :size="58"></mt-spinner>
      <div>加载中...</div>
    </div>

    <div class="list-container" v-else>
      <div class="learn-item" @click="$router.push('/learnDetails')">
        <span class="learned">已学习</span>
        <h3 class="title">旅游突发事件应急处理1</h3>
        <div class="to-learn">去学习&gt;&gt;</div>
      </div>

      <div class="learn-item">
        <span class="learned">已学习</span>
        <h3 class="title">旅游突发事件应急处理1</h3>
        <div class="to-learn">去学习&gt;&gt;</div>
      </div>

      <div class="learn-item">
        <span class="learned">已学习</span>
        <h3 class="title">旅游突发事件应急处理1</h3>
        <div class="to-learn">去学习&gt;&gt;</div>
      </div>

      <div class="learn-pdf">
        <mt-cell title="旅游突发事件应急手册" is-link></mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
    };
  },
  mounted () {
    this.list = [1,2]
  },
};
</script>
<style lang='scss'>
.learn-list-box {
  padding: .6rem .2rem.2rem;
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
    }

    .learn-pdf {
      border: 3px solid #26a2ff;
      border-radius: .1rem;
      padding: .1rem;
      box-sizing: border-box;
    }
  }
}
</style>
