<template>
  <div class="login-box">
    <div class="login-bg">
      <div class="form-box">
        <div class="app-title">2021年成都文旅培训平台</div>

        <div class="login-form">
          <mt-field
            label=""
            placeholder="请输入已激活的身份证号"
            type="tel"
            v-model="cardNo"
          >
            <img
              class="form-icon"
              :src="mobileIcon"
              height="17px"
              width="12px"
            />
          </mt-field>
          <mt-field
            label=""
            placeholder="请输入密码"
            :type="!showPwd ? 'password' : 'text'"
            v-model="password"
            :attr="{ maxlength: 20 }"
          >
            <img
              class="form-icon"
              :src="passwordIcon"
              height="13px"
              width="13px"
            />
            <img
              class="show-pwd-icon"
              :src="!showPwd ? ShowPwdIcon : HiddenPwdIcon"
              @click="() => this.showPwd = !this.showPwd"
            >
          </mt-field>
        </div>
      </div>

      <mt-button type="primary" class="loginBtn" @click="Login">登录</mt-button>
      <div class="regist" @click="$router.push('/regist')">没有账号？点击前往激活</div>

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
import passwordIcon from '../../assets/login/password.png';
import mobileIcon from '../../assets/login/mobile.png';
import ShowPwdIcon from '../../assets/login/showPwd.png';
import HiddenPwdIcon from '../../assets/login/hiddenPwd.png';

export default {
  name: "login",
  data() {
    return {
      cardNo: localStorage.getItem('cardNo') || '',
      password: '',
      showNote: false,
      passwordIcon,
      mobileIcon,
      showPwd: false,
      ShowPwdIcon,
      HiddenPwdIcon,
    };
  },
  methods: {
    Login () {
      // Toast({
      //   message: '培训已结束'
      // });
      login({
        cardNo: this.cardNo,
        password: this.password
      }).then(async res => {
        const { code, data = {} } = res;

        if (code === '200') {
          await setTokenLoc(data.token || '');
          await setCardNo(data.cardNo || '');
          sessionStorage.setItem('accountType', data.accountType)
          this.$store.commit('setUserInfo', data)
          this.$router.push('/my');
        }
      })
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
    padding-top: 2.3rem;
    .form-box {
      width: 3.26rem;
      background: #fff;
      border-radius: 8px;
      margin: 0 auto;
      padding: .2rem 0;
      box-shadow: 0 0 .1rem 0 #dcf7ff;
      .app-title {
        font-size: .18rem;
        line-height: .3rem;
        color: #187EB2;
        margin-bottom: .1rem;
      }
    }
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
    padding: 0 .25rem;
    // 重置表单样式
    .mint-cell {
      background: transparent;
      position: relative;
      &:nth-child(1) {
        .mint-field-clear {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          margin-right: 0;
        }
        .mint-cell-wrapper {
          border-bottom: 1px solid rgba(233, 233, 233, 0.5);
        }
      }
      .mint-field-clear {
        margin-right: .2rem;
      }
      .mint-cell-wrapper {
        background: transparent;
        input {
          background: transparent;
          color: #303030;
          font-size: 0.13rem;
          padding-left: 0.3rem;
          &::placeholder {
            color: #C1C1C1;
            font-size: 0.13rem;
          }
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
    width: 86%;
    height: .44rem;
    background: linear-gradient(87deg, #2078E4 0%, #1A5AC1 100%);
    box-shadow: 0px 2px 7px 0px rgba(7, 140, 209, 0.47);
    border-radius: .22rem;
    margin-top: .58rem;
    margin-left: 7%;
  }

  .forgetPwd,
  .regist {
    text-align: center;
    font-size: 0.14rem;
    color: #078CD1;
    margin: 0.26rem 0;
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

  .show-pwd-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: .17rem;
    height: .12rem;
  }
}
</style>
