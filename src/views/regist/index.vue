<template>
  <div class="regist-box">
    <mt-header fixed title="账号激活">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <div class="regist-form">
      <mt-field label="身份证号" placeholder="请输入身份证号/登录账号" type="IDCard" v-model="IDCard">
        <div class="getInfo" @click="getInfo">确定</div>
      </mt-field>
      <mt-field label="姓名" placeholder="点击确定后自动获取" disabled v-model="name"></mt-field>
      <mt-field label="电子导游证" placeholder="点击确定后自动获取" disabled v-model="guideID"></mt-field>
      <mt-field label="挂靠单位" placeholder="点击确定后自动获取" disabled v-model="company"></mt-field>
      <mt-field label="设置密码" placeholder="8-16位字符，必须包含字母和数字" type="password" v-model="password"></mt-field>
      <mt-field label="确认密码" placeholder="8-16位字符，必须包含字母和数字" type="password" v-model="passwordConfirm"></mt-field>

      <mt-button type="primary" style="width: 100%; margin-top: .2rem" @click="submitForm">完成</mt-button>
    </div>
  </div>
</template>

<script>
import isIDCard from 'utils';

export default {
  components: {
  },
  data () {
    return {
      IDCard: '',
      name: '',
      guideID: '',
      company: ''
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
      if (!this.password || !PwdReg.test(this.password)) {
        Toast('密码必须是8-16位的字母和数字组成');
        return
      }
      if (this.password !== this.passwordConfirm) {
        Toast('两次输入密码不一致');
        return
      }
    },
    submitForm () {
      this.$router.replace('/regist-success')
    }
  }
}
</script>
<style lang='scss'>
  .regist-box {
    padding-top: .5rem;
    .regist-form {
      padding: 0 .1rem;
      .getInfo {
        color: #0d97e6;
      }
      input:disabled {
        background: #fff;
      }
    }
  }
</style>
