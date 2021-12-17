<template>
  <div class="my-box">
    <div>
      <div class="name">
        <span>{{info.name}}</span>
      </div>
      <div class="info">
        <div><span>电子导游证</span>{{info.cardNo}}</div>
        <div><span>已学习时长</span>{{getTime(info.workingTime)}}</div>
        <div v-if="accountType == '1'"><span>还需学习时长</span>{{getTime(16 * 60 - info.workingTime)}}</div>
        <div v-if="accountType == '2'"><span>还需学习时长</span>{{getTime(4 * 60 - info.workingTime)}}</div>
        <div><span>培训状态</span>{{info.status}}</div>
      </div>
      <mt-button class="log-out" type="primary" @click="logOutFunc">退出当前账号</mt-button>
    </div>
  </div>
</template>

<script>
import { getExamResult } from 'api/my';
import { logOut } from 'api/login';
import { getCardNo } from 'utils/storage';
import { session_get } from "utils";
import { MessageBox, Toast } from 'mint-ui';

export default {
  components: {
  },
  data () {
    return {
      accountType: session_get('accountType'),
    }
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
              localStorage.removeItem('closed')
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
    position: relative;
    overflow: hidden;
    background: url("../../assets/login/loginBg.png");
    background-size: cover;
    background-position: top;
    content: "viewport-units-buggyfill; min-height: 100vh";
    padding-top: 3rem;
    > div {
      display: flex;
      flex-flow: column;
      align-items: center;
      > .name {
        font-size: .24rem;
        font-weight: bold;
        color: #303030;
        text-align: center;
      }
      > .info {
        font-size: .13rem;
        color: #303030;
        line-height: .3rem;
        margin: .3rem .2rem .4rem;
        span {
          display: inline-block;
          width: 1rem;
          font-weight: bold;
        }
      }
      > .log-out {
        width: 3.26rem;
        height: .44rem;
        background: linear-gradient(87deg, #2078E4 0%, #1A5AC1 100%);
        box-shadow: 0px 2px 7px 0px rgba(7, 140, 209, 0.47);
        border-radius: .22rem;
        font-size: .18rem;
        margin-bottom: .5rem;
      }
    }
  }
</style>
