<template>
  <div class="login-box">
    <div class="login-bg">
      <div class="app-title">2020年成德眉资导游人员线上培训系统</div>
      <div class="login-title">
        <div class="login-title-line"></div>
        <div class="login-title-text">登 · 录</div>
        <div class="login-title-line"></div>
      </div>

      <div class="login-form">
        <mt-field
          label=""
          placeholder="请输入已激活的身份证号"
          type="tel"
          v-model="cardNo"
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

      <mt-button type="primary" class="loginBtn" @click="Login">登录</mt-button>
      <div class="regist" @click="$router.push('/regist')">激活账号</div>

      <div class="note" v-if="showNote">
        <h2>成都市文化广电旅游局关于开展2020年度成德眉资导游人员线上培训工作的通知</h2>
        <section>
          各位导游：<br>
          <p style="text-indent: 20px;">欢迎参加2020年度成德眉资导游人员线上培训，现将注意事项做如下通知。</p>
        </section>
        <br />
        <section>
          一、培训日期 2020年10月19日至2020年12月20日（共计60天）
        </section>
        <br />
        <section>
          二、培训方式 导游学员进入网站后，先点击激活账户，用个人身份证号进行账号激活，并设置密码。激活成功后方可登录系统进行学习，本次培训要求各学员需在线培训24学时。学员可在“我的”功能内查询学习进度，显示“已通过”表示本次培训完成。
        </section>
        <br />
        <section>
          三、培训咨询服务 本次培训采用线上模式，参与培训期间如在实际操作中有任何疑问和问题，请通过以下方式进行咨询： QQ群号：571944516
        </section>
        <br>
        <section>
          温馨提示：强制挂机系统会暂停学时记录!
        </section>
        <!-- <br /> -->
        <!-- <p style="float: right;">2020年10月30日</p> -->
        <mt-button type="primary" @click="closeNote" style="width: 100%">确定</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from 'api/login';
import { setTokenLoc, setCardNo } from 'utils/storage';
import { Toast } from 'mint-ui';
export default {
  name: "login",
  data() {
    return {
      cardNo: localStorage.getItem('cardNo') || '',
      password: '',
      showNote: true,
    };
  },
  methods: {
    Login () {
      Toast({
        message: '培训已结束'
      });
      return
      // login({
      //   cardNo: this.cardNo,
      //   password: this.password
      // }).then(async res => {
      //   const { code, data = {} } = res;

      //   if (code === '200') {
      //     await setTokenLoc(data.token || '');
      //     await setCardNo(data.cardNo || '');
      //     this.$store.commit('setUserInfo', data)
      //     this.$router.push('/my');
      //   }
      // })
    },
    closeNote () {
      this.showNote = false
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
  background-position: top;
  content: "viewport-units-buggyfill; min-height: 100vh";
  .login-bg {
    width: 100%;
    min-height: 100%;
    background: rgba($color: #000000, $alpha: .3);
    padding: .5rem 12vw 0;
  }
  .app-title {
    font-size: .26rem;
    line-height: .36rem;
    color: #fff;
    text-align: center;
  }
  .login-title {
    display: flex;
    align-items: center;
    margin: .2rem 0 1rem;
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
    top: .5rem;
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
