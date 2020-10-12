<template>
  <div class="my-box">
    <div>
      <div class="name">
        <span>姓名</span>
      </div>
      <div class="info">
        <div>电子导游证：XXXX</div>
        <div>已在线学习时长： XX小时</div>
        <div>还需学习时长： XX小时</div>
        <div>培训状态：已通过/未通过</div>
      </div>
      <mt-button type="primary" style="width: 60vw">退出当前账号</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {}
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang='scss'>
  .my-box {
    margin-top: 1rem;
    > div {
      display: flex;
      flex-flow: column;
      align-items: center;
      > .name {
        width: .8rem;
        height: .8rem;
      }
      > .info {
        font-size: .15rem;
        line-height: .25rem;
        margin: .2rem;
      }
    }
  }
</style>
