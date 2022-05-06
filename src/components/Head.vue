<template>
  <mt-header fixed :title="title"></mt-header>
</template>

<script>
export default {
  data () {
    return {
      title: process.env.VUE_APP_TITLE
    }
  },
  mounted() {
    // console.log('head')
  },
}
</script>
