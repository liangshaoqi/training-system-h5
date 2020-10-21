<template>
  <div class="learn-details-box">
    <mt-header fixed title="2020年成德眉资导游人员线上培训系统">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

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
    >
    </iframe>
    <div v-if="type === 'PDF'">
      <img :src="url" style="width: 100%" alt="">
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

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
    this.url = url
  }
}
</script>

<style lang="scss">
  .learn-details-box {
    padding-top: .4rem;
  }
</style>
