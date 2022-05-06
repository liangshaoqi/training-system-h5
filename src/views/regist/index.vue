<template>
  <div class="regist-box">
    <div class="ID-form common-form-box">
      <mt-field
        label=""
        placeholder="请输入身份证号"
        type="IDCard"
        v-model="IDCard"
      >
        <img
          class="form-icon"
          :src="mobileIcon"
          height="17px"
          width="12px"
        />
        <div class="verify-btn" @click="getInfo">查验</div>
      </mt-field>
    </div>
    <div class="regist-form common-form-box">
      <div class="common-form-title">学员信息 <span>点击查验自动获取</span></div>
      <div class="info-item"><span>姓名</span>{{name || ''}}</div>
      <div class="info-item"><span>身份证号</span>{{cardNo || ''}}</div>
      <div class="info-item"><span>所属单位</span>{{company || ''}}</div>
    </div>
    <div class="password-form common-form-box">
      <div class="common-form-title">设置密码</div>
      <mt-field
        label=""
        placeholder="请输入密码（6-12位字符）"
        :type="!showPwd1 ? 'password' : 'text'"
        v-model="password"
      >
        <img
          class="form-icon"
          :src="passwordIcon"
          height="13px"
          width="13px"
        />
        <img
          class="show-pwd-icon"
          :src="!showPwd1 ? ShowPwdIcon : HiddenPwdIcon"
          height=".17rem"
          width=".12rem"
          @click="() => this.showPwd1 = !this.showPwd1"
        >
      </mt-field>
      <mt-field
        label=""
        placeholder="请确认密码（6-12位字符）"
        :type="!showPwd2 ? 'password' : 'text'"
        v-model="passwordConfirm"
      >
        <img
          class="form-icon"
          :src="passwordIcon"
          height="13px"
          width="13px"
        />
        <img
          class="show-pwd-icon"
          :src="!showPwd2 ? ShowPwdIcon : HiddenPwdIcon"
          height=".17rem"
          width=".12rem"
          @click="() => this.showPwd2 = !this.showPwd2"
        >
      </mt-field>
    </div>

    <mt-button type="primary" class="confirm-btn" @click="submitForm">确认激活</mt-button>
    <div class="to-login" @click="toLogin">已有账号 前往登陆</div>
  </div>
</template>

<script>
import { isIDCard } from 'utils';
import { Toast } from 'mint-ui';
import { getGuiderInfo, register } from 'api/regist';
import passwordIcon from '../../assets/login/password.png';
import mobileIcon from '../../assets/login/mobile.png';
import ShowPwdIcon from '../../assets/login/showPwd.png';
import HiddenPwdIcon from '../../assets/login/hiddenPwd.png';

export default {
  components: {
  },
  data () {
    return {
      IDCard: '',
      name: '',
      cardNo: '',
      company: '',
      password: '',
      passwordConfirm: '',
      showPwd1: false,
      showPwd2: false,
      ShowPwdIcon,
      HiddenPwdIcon,
      passwordIcon,
      mobileIcon,
    }
  },
  methods: {
    getInfo () {
      if (!this.IDCard) {
        Toast('请先输入身份证号/登录账号');
        return
      }
      if (!isIDCard(this.IDCard)) {
        Toast('请输入正确的身份证号码');
        return
      }

      getGuiderInfo({
        cardNo: this.IDCard,
        type: 2
      }).then((res) => {
        const data = res.data || {}
        this.name = data.name
        this.cardNo = data.cardNo
        this.company = data.orgName
      })
    },
    submitForm () {
      if (!this.name) {
        Toast('请完善信息方可激活');
        return
      }
      if (!this.password || this.password.length < 6 || this.password.length > 12) {
        Toast('密码限制为6-12位字符');
        return
      }
      if (this.password !== this.passwordConfirm) {
        Toast('两次输入密码不一致');
        return
      }

      register({
        cardNo: this.IDCard,
        password: this.password,
        type: 2
      }).then(res => {
        if (res.code === '200') {
          localStorage.setItem('cardNo', this.IDCard)
          Toast('注册成功，请登录', 5);
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000);
        }
      })
    },
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang='scss'>
  .regist-box {
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: url("../../assets/login/loginBg.png");
    background-size: cover;
    background-position: top;
    content: "viewport-units-buggyfill; min-height: 100vh";
    padding: .5rem .24rem .5rem;
    box-sizing: border-box;
    .common-form-box {
      background: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0 0 .1rem 0 #dcf7ff;
    }
    .ID-form {
      width: 100%;
      padding: .25rem;
      margin-bottom: .15rem;
      position: relative;
      .mint-cell {
        min-height: inherit;
      }
      .mint-cell-wrapper {
        background: transparent;
        border-bottom: 1px solid #fff;
        input {
          height: .19rem;
          line-height: .19rem;
          background: transparent;
          color: #303030;
          font-size: 0.13rem;
          padding-left: .2rem;
          margin-left: .2rem;
          border-left: 1px solid rgba($color: #000000, $alpha: .22);
          &::placeholder {
            color: #C1C1C1;
            font-size: 0.13rem;
          }
        }
      }
      .mint-field-clear {
        margin-right: .25rem;
        .mintui {
          width: .16rem;
          height: .16rem;
          font-size: .16rem;
        }
      }
      .mint-field-other {
        position: inherit;
      }
      .verify-btn {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: .13rem;
        line-height: .19rem;
        color: #1C64CC;
        font-weight: bold;
      }
    }
    .regist-form {
      padding: .2rem;
      margin-bottom: .15rem;
      .common-form-title {
        margin-bottom: .27rem;
      }
      .info-item {
        font-size: .13rem;
        color: #303030;
        margin: .2rem .3rem 0;
        span {
          display: inline-block;
          width: .9rem;
          font-weight: bold;
        }
      }
    }
    .password-form {
      padding: .2rem .2rem .1rem;
      .mint-cell {
        min-height: inherit;
        &:nth-child(2) {
          .mint-cell-wrapper {
            border-bottom: 1px solid #f2f2f2;
          }
        }
      }
      .mint-cell-wrapper {
        padding: .2rem 0;
        background: transparent;
        border-bottom: 1px solid #fff;
        input {
          height: .19rem;
          line-height: .19rem;
          background: transparent;
          color: #303030;
          font-size: 0.13rem;
          padding-left: .2rem;
          margin-left: .3rem;
          border-left: 1px solid rgba($color: #000000, $alpha: .22);
          &::placeholder {
            color: #C1C1C1;
            font-size: 0.13rem;
          }
        }
      }
      .mint-field-clear {
        margin-right: .3rem;
        .mintui {
          width: .16rem;
          height: .16rem;
          font-size: .16rem;
        }
      }
      .mint-field-other {
        position: inherit;
      }
    }
    .confirm-btn {
      width: 100%;
      height: .44rem;
      background: linear-gradient(87deg, #2078E4 0%, #1A5AC1 100%);
      box-shadow: 0px 2px 7px 0px rgba(7, 140, 209, 0.47);
      border-radius: .22rem;
      margin-top: .35rem;
      font-size: .18rem;
    }
    .to-login {
      font-size: .14rem;
      color: #078CD1;
      text-align: center;
      margin-top: .2rem;
    }


    .common-form-title {
      font-size: .14rem;
      font-weight: bold;
      color: #1E1E1E;
      span {
        display: inline-block;
        font-size: .12rem;
        font-weight: normal;
        color: #C1C1C1;
        margin-left: .07rem;
      }
    }
    .form-icon {
      position: absolute;
      top: 50%;
      left: 0.05rem;
      transform: translateY(-50%);
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
