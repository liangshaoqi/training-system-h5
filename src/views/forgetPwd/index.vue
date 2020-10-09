<template>
  <div class="forgetPwd-box">
    <mt-header fixed title="忘记密码">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <div class="gorgetPwd-form">
      <mt-field label="手机号" placeholder="请输入绑定手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="验证码" placeholder="请输入短信验证码" v-model="captcha">
        <div class="getSmsCode" @click="getSmsCode">{{countDown ? `${second}s后重新获取` : '获取验证码'}}</div>
      </mt-field>
      <mt-field label="设置新密码" placeholder="8-16位字符，必须包含字母和数字" type="password" v-model="password"></mt-field>
      <mt-field label="确认密码" placeholder="8-16位字符，必须包含字母和数字" type="password" v-model="passwordConfirm"></mt-field>

      <mt-button type="primary" style="width: 100%; margin-top: .2rem" @click="submitForm">完成</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { isMobile, PwdReg } from 'utils';

export default {
  name: 'forgetPwd',
  data () {
    return {
      phone: '',
      captcha: '',
      password: '',
      passwordConfirm: '',
      countDown: false,
      second: 60,
      interval: null,
    }
  },
  methods: {
    submitForm () {
      if (!this.phone) {
        Toast('请输入绑定手机号');
        return
      }
      if (!isMobile(this.phone)) {
        Toast('请输入正确的手机号');
        return
      }
      if (!this.captcha) {
        Toast('请输入验证码');
        return
      }
      if (!this.password || !PwdReg.test(this.password)) {
        Toast('密码必须是8-16位的字母和数字组成');
        return
      }
      if (this.password !== this.passwordConfirm) {
        Toast('两次输入密码不一致');
        return
      }
    },
    getSmsCode () {
      if (this.countDown) {
        return
      }
      this.countDown = true

      this.interval = setInterval(() => {
        if (this.second > 0) {
          this.second --
        } else {
          this.countDown = false
          this.second = 60
          clearInterval(this.interval)
          this.interval = null
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  .forgetPwd-box {
    padding-top: .5rem;
    .gorgetPwd-form {
      padding: 0 .1rem;
      .getSmsCode {
        color: #0d97e6;
      }
    }
  }
</style>
