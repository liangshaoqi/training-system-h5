<template>
  <div class="learn-details-box">
    <mt-header fixed title="2020成都">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <video width="100%" id="myVideo" autoplay="autoplay" src="http://test.cdlyfw.qiniu.palmyou.com/o_1dmq3ss0t1bkajeg1fhm1v789pc7.mp4" controls="controls">您的浏览器不支持 video 标签。</video>
  </div>
</template>

<script>
export default {
  name: 'learn-details'
}
</script>

<style lang="scss">
  .learn-details-box {
    padding-top: .4rem;
  }
</style>
