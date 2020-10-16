<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { saveExamInfo } from 'api/my'

export default {
  name: 'App',
  data () {
    return {
      minute: 1,
      timeout: null,
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  watch: {
    userInfo () {
      if (Object.keys(this.userInfo).length > 0) {
        this.saveExamTime()
      } else {
        clearTimeout(this.timeout)
        this.timeout = null
      }
    }
  },
  mounted () {
    if (Object.keys(this.userInfo).length > 0) {
      this.saveExamTime()
    }
  },
  methods: {
    saveExamTime () {
      const startTime = localStorage.getItem('startTime') ? localStorage.getItem('startTime') : +new Date()
      const second = localStorage.getItem('startTime') ? this.minute * 60 - (+new Date() - startTime) / 1000 : this.minute * 60

      if (second <= 0) {
        localStorage.setItem('startTime', +new Date())
        this.saveExamTime()
        return
      }
      localStorage.setItem('startTime', startTime)
      this.timeout = setTimeout(() => {
        saveExamInfo({
          cardNo: localStorage.getItem('cardNo'),
          startTime: new Date(startTime),
          endTime: new Date(startTime + this.minute * 60 * 1000),
          workingTime: this.minute
        }).then(res => {
          if (res.code === '200') {
            const examInfo = this.$store.state.examInfo || {}
            examInfo.workingTime = examInfo.workingTime + this.minute

            this.$store.commit('setExamInfo', examInfo)
          }
          localStorage.setItem('startTime', +new Date())
          this.saveExamTime()
        })
      }, second * 1000)
    }
  }
}
</script>

<style lang='scss'>
  #app {
    font-size: .14rem;
    background: #f6f6f6;
    min-height: 100vh;
  }
</style>
