<template>
  <div class="learn-details-box">
    <!-- <mt-header fixed title="2021年度成都导游人员培训服务平台">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header> -->

    <iframe
      v-if="type === 'MP4'"
      :src="url"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
      width="100%"
      height="100%"
      style="margin-top: .4rem"
    >
    </iframe>
    <div v-if="type === 'PDF'">
      <img v-for="(item, idx) in url" :src="item" :key="idx" style="width: 100%; display: block;" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'learn-details',
  data () {
    return {
      url: '',
      type: '',
      numPages:1,
    }
  },
  mounted () {
    const { url, type } = this.$route.query

    this.type = type
    if (type === 'PDF') {
      this.url = url.split(',')
    } else {
      this.url = url
    }
  }
}
</script>

<style lang="scss">
  .learn-details-box {
    // padding-top: .4rem;
  }
</style>
