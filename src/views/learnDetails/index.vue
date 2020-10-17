<template>
  <div class="learn-details-box">
    <mt-header fixed title="2020成都市导游人员提升培训系统">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <iframe
      :src="url"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
      width="100%"
      height="100%"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'learn-details',
  data () {
    return {
      url: this.$route.query ? this.$route.query.url : ''
    }
  }
}
</script>

<style lang="scss">
  .learn-details-box {
    padding-top: .4rem;
  }
</style>
