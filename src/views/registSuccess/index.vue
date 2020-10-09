<template>
  <div class="regist-success-box">
    <mt-header fixed title="激活成功">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <img :src="require('../../assets/regist/success.png')" alt="">
    <div class="tips">激活成功</div>
    <mt-button type="primary" style="width: 2rem; margin: 0 auto;" @click="$router.replace('/login')">去登陆</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang='scss'>
  .regist-success-box {
    padding-top: 1rem;
    text-align: center;
    > img {
      width: .68rem;
      height: .68rem;
    }
    > .tips {
      font-size: .2rem;
      color: #333;
      line-height: .6rem;
    }
  }
</style>
