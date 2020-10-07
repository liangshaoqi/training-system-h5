<template>
  <div>
    <Head ref="head"></Head>
    <div class="container-view">
      <router-view></router-view>
    </div>
    <Footer ref=footer></Footer>
  </div>
</template>

<script>
import Head from 'components/Head'
import Footer from 'components/Footer'

export default {
  components: {
    Head,
    Footer
  }
}
</script>

<style lang='scss'>
  .container-view {
    padding-top: .73rem;
  }
</style>
