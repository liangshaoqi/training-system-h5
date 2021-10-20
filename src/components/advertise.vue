<template>
  <div class="advertise-box" v-if="showAdvertise === 'show'">
    <img class="advertiseImg" @click="jumpTo" :src="advertiseImg" alt="">
    <img class="closeImg" :src="closeImg" @click="closeAdvertise" alt="">
  </div>
</template>

<script>
import advertiseImg from '../assets/advertise.png'
import closeImg from '../assets/close.png'
export default {
  name: 'advertise',
  data () {
    return {
      advertiseImg,
      closeImg,
      showAdvertise: localStorage.getItem('showAdvertise'),
    };
  },
  watch: {
    $route() {
      this.handleAdvertise();
    }
  },
  mounted () {
    this.handleAdvertise();
  },
  methods: {
    closeAdvertise () {
      this.showAdvertise = false
      localStorage.setItem('showAdvertise', 'hidden')
      localStorage.setItem('closed', 1)
    },
    handleAdvertise () {
      if (localStorage.getItem('token')) {
        const path = this.$route.path;
        const closed = localStorage.getItem('closed');
        if (path !== '/login' && path !== '/regist' && !closed) {
          setTimeout(() => {
            if (localStorage.getItem('closed')) return
            this.showAdvertise = 'show'
            localStorage.setItem('showAdvertise', 'show')
          }, 60 * 5 * 1000);
        }
      }
    },
    jumpTo () {
      window.location.href = 'https://mp.weixin.qq.com/s/cmm0VG2dUrOexQ5AX139ng';
    },
  },
}
</script>

<style lang="scss">
  .advertise-box {
    position: fixed;
    bottom: .6rem;
    left: 50%;
    transform: translateX(-50%);

    .advertiseImg {
      width: 3.25rem;
      height: .75rem;
      box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, .2);
      border-radius: .08rem;
    }
    .closeImg {
      width: .19rem;
      height: .19rem;
      position: absolute;
      top: -.07rem;
      right: -.07rem;
    }
  }
</style>