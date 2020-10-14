<template>
  <div class="login-box">
    <div class="login-bg">
      <div class="login-title">
        <div class="login-title-line"></div>
        <div class="login-title-text">登 · 录</div>
        <div class="login-title-line"></div>
      </div>

      <div class="login-form">
        <mt-field
          label=""
          placeholder="请输入已激活的手机号"
          type="tel"
          v-model="mobile"
          style="margin-bottom: .5rem"
        >
          <img
            class="form-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAaCAYAAABRqrc5AAAAu0lEQVRIS+2VPQpCMRCEv9XWIwh6EwsLe8HWysojiOBf5xUsPIDnsRax0drGRkc2vIeg5kEsrLIQSLH7sQzJjEnqAFugDRhpdQbGJukA1AvQI4FRA4ZAwyE+uDKzWQIgtEqaAnOHKFzMFj9AJsAyQ17KScqavD2krMnnz8qa/EmTHeAntfrAoHS22PANuACtCvq9NOpYVLjvroEr4O7+rQLkBDQjDZ4re6BbscnRIT1gU4BSwstTwhcYPQEdONbWFRejRgAAAABJRU5ErkJggg=="
            height="26px"
            width="17px"
          />
        </mt-field>
        <mt-field
          label=""
          placeholder="请输入密码"
          type="password"
          v-model="password"
          :attr="{ maxlength: 20 }"
        >
          <img
            class="form-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAACYUlEQVRIS+WVW4iNcRTFf0sh5RKSN5I3jZJLUqNBKCEeMEkTiYYXxcMkhckDj6gpmidjQogapKaQXJPLRC4lvCjklpJbYWmf/mc633Euzrza9T19e6+993/vvZaoYraHAruBecBGSZeqxaicg+1BwHpgGzAa+AX0A7qAVkn3y8VmQG1H0BRgObAGGAW8BLYCV4E9wEog4qLiw8B5Se8LE8j2vhQ8BpgIDEsOT4C9QKek7/kg2+GzJYEPBH4Dz4CnwLtIFKAG4otsj4DrwFlJtyq9ne3hwBJgbupuHBBJduZBL0qKn3022zOBK/8BqO2RaVhtkl7HmxW031rzm9oeDFwApgPNktoTaH1au9pAbQ8AzqXrugbMl/Ttn0Ftjwf2A9sl9aTDOAasAOKaZkn6VLC/1Su1vTBV9RaIddkMbACeA/WS3hTun+0M6M/YL0lzipfUdlS6CfgMDAFiKAH4ooRvA3AZ2BGDegX8kBQXkTHbceOdwCogWm2Q9KDUhdheDRyKbgL0JLAMmCrpbgng/kAL0C3pTgVWOwMsBuoCNP92XZKW9uVObU8GbgP3JE3LUZ/tG8AMoFHSiVqAbQeJ3AQmAQskdedBJ6RMQWOzK7VZNPGIP5JosENScHCObHNmuxE4migwlrossyf/IPS2kJhUUOzt1wxoclwHHAS+AGslnSoz6RFAB7AI6IkLk/Qh7/uXRtmOCYZMhAKcTnr0MCUN3WoCdiXdCr1qkhR73Gslhc/2WOBAPHxShZCLqKQOCEL5mASxXVKoRsbKqmmqLK6kGYhri8ofA8eBAOu9+2LQPy42I8OXgLxuAAAAAElFTkSuQmCC"
            height="24px"
            width="21px"
          />
        </mt-field>
      </div>

      <mt-button type="primary" class="loginBtn">登录</mt-button>
      <div class="regist" @click="$router.push('/regist')">激活账号</div>

      <div class="note" v-if="showNote">
        <h2>关于2019年度成都市导游人员提升培训工作的声明</h2>
        <section>
          第一、依据“《导游管理办法》第三十一条：各级旅游主管部门应当积极组织开展导游培训，培训内容应当包括政策法规、安全生产、突发事件应对和文明服务等，培训方式可以包括培训班、专题讲座和网络在线培训等，每年累计培训时间不得少于24小时。培训不得向参加人员收取费用。”的规定，由成都市文化广电旅游局针对全市已经换发电子导游证的导游人员组织开展的“2019年度成都市导游人员提升培训工作的网络培训”为“免费培训”，任何单位或个人不得非法冒用、借用旅游行政管理部门的名义收取培训相关费用，以达到非法敛财的目的。一经发现，将联合相关部门，依法严厉惩处。
        </section>
        <br />
        <section>
          第二、任何单位或个人借“成都市文化广电旅游局组织开展的《2019年度成都市导游人员提升培训工作》”用非正当方式获取利益的，可收集提供相关证据向当地公安机关进行举报。
        </section>
        <br />
        <p style="float: right;">2019年10月30日</p>
        <mt-button type="primary" @click="closeNote" style="width: 100%">确定</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      mobile: "",
      password: "",
      showNote: true,
    };
  },
  methods: {
    Login () {
      this.$router.push('/my');
    },
    closeNote () {
      this.showNote = false
    },
    toForgetPwd () {
      this.$router.push('/forgetPwd');
    }
  }
};
</script>

<style lang="scss">
.login-box {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: url("../../assets/login/loginBg.png");
  background-size: cover;
  background-position: bottom;
  content: "viewport-units-buggyfill; min-height: 100vh";
  .login-bg {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: .3);
    padding: .5rem 12vw 0;
  }
  .login-title {
    display: flex;
    align-items: center;
    margin: 0 0 1rem;
    .login-title-line {
      height: 1px;
      width: 32%;
      background: rgba(233, 233, 233, 0.5);
    }
    .login-title-text {
      width: 36%;
      font-size: 0.26rem;
      color: #fff;
      text-align: center;
    }
  }

  .login-form {
    // 重置表单样式
    .mint-cell {
      background: transparent;
      position: relative;
    }
    .mint-cell-wrapper {
      background: transparent;
      border-bottom: 1px solid rgba(233, 233, 233, 0.5);
      input {
        background: transparent;
        color: #e9e9e9;
        font-size: 0.18rem;
        padding-left: 0.3rem;
        &::placeholder {
          color: #e9e9e9;
          font-size: 0.18rem;
        }
      }
    }
    .mint-field-other {
      position: inherit;
    }
    .form-icon {
      position: absolute;
      top: 50%;
      left: 0.05rem;
      transform: translateY(-50%);
    }
  }

  .loginBtn {
    width: 100%;
    margin-top: .4rem;
  }

  .forgetPwd,
  .regist {
    text-align: right;
    font-size: 0.14rem;
    color: #fff;
    margin: 0.2rem 0;
  }

  .note {
    background-color: #fff;
    padding: .2rem;
    position: absolute;
    top: .7rem;
    left: 0;
    z-index: 999;
    font-size: .15rem;
    color: #000;
    line-height: .2rem;
    h2 {
      text-align: center;
      line-height: .3rem;
    }
  }
}
</style>
