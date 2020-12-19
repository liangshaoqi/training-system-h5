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
      minute: process.env.NODE_ENV === 'production' ? 1 : 1,
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
      let offlineSecond = parseInt(localStorage.getItem('offlineSecond') || 0)
      let second = localStorage.getItem('startTime') ? this.minute * 60 - (+new Date() - startTime) / 1000 : this.minute * 60

      if (offlineSecond) {
        second = this.minute * 60
        offlineSecond = offlineSecond + second
      }

      if (!offlineSecond && second <= 0) {
        localStorage.setItem('startTime', +new Date())
        this.saveExamTime()
        return
      }
      localStorage.setItem('startTime', startTime)
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
      this.timeout = setTimeout(() => {
        const workingTime = offlineSecond ? Math.floor(offlineSecond / 60 * 100) / 100 : this.minute

        saveExamInfo({
          cardNo: localStorage.getItem('cardNo'),
          endTime: +new Date(),
          workingTime,
        }).then(res => {
          if (res.code === '200') {
            const examInfo = this.$store.state.examInfo || {}
            examInfo.workingTime = examInfo.workingTime + workingTime
            examInfo.status = res.data

            this.$store.commit('setExamInfo', examInfo)
            localStorage.removeItem('offlineSecond')
          }
          localStorage.setItem('startTime', +new Date())
          this.saveExamTime()
        }).catch(() => {
          clearTimeout(this.timeout)
          this.timeout = null
          localStorage.setItem('offlineSecond', offlineSecond || this.minute * 60)
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
