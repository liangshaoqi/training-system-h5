<template>
  <div class="my-box">
    <div>
      <div class="name">
        <span>{{info.name}}</span>
      </div>
      <div class="info">
        <div>电子导游证：{{info.cardNo}}</div>
        <div>已在线学习时长： {{getTime(info.workingTime)}}</div>
        <div>还需学习时长： {{getTime(24 * 60 - info.workingTime)}}</div>
        <div>培训状态：{{info.status}}</div>
      </div>
      <mt-button type="primary" style="width: 60vw" @click="logOutFunc">退出当前账号</mt-button>
    </div>
  </div>
</template>

<script>
import { getExamResult } from 'api/my';
import { logOut } from 'api/login';
import { getCardNo } from 'utils/storage';
import { MessageBox, Toast } from 'mint-ui';

export default {
  components: {
  },
  data () {
    return {}
  },
  computed: {
    info () {
      return this.$store.state.examInfo || {}
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.getExamResultFunc()
  },
  methods: {
    getExamResultFunc () {
      getExamResult({
        cardNo: getCardNo() || ''
      }).then(res => {
        if (res.code === '200') {
          this.$store.commit('setExamInfo', res.data || {})
        }
      })
    },
    getTime (minute = 0) {
      if (minute < 0) return '0小时0分钟'
      let h = parseInt(minute / 60) || 0
      let m = minute % 60 || 0
      return h + '小时' + m + '分钟'
    },
    logOutFunc () {
      MessageBox.confirm('确认退出当前账号?').then(action => {
        if (action === 'confirm') {
          logOut({
            cardNo: localStorage.getItem('cardNo')
          }).then(res => {
            if (res.code === '200') {
              localStorage.clear()
              this.$store.commit('setUserInfo', {})
              Toast('已退出，请重新登录')
              this.$router.push('/login')
            }
          })
        }
      })
    }
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
        width: 1rem;
        height: 1rem;
        background: #0d97e6;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > .info {
        font-size: .15rem;
        line-height: .25rem;
        margin: .4rem .2rem .5rem;
      }
    }
  }
</style>
