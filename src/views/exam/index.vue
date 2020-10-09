<template>
  <div class="exam-box">
    <div class="exam_note">
      <h2>注意事项：</h2>
      1.本试卷共45题，其中单选20题/2分，多选10题/3分，判断15题/2分，合计100分；<br>
      2.导游员在规定时间内完成网上课件学习并完成测试试题，测试成绩达80分即通过2019年度导游培训。在线考试若未达80分，导游需要再次参与考试，直至通过；
    </div>

    <div class="choice">
      <h2>一、单选题</h2>
      <div class="single-box">
        <p>1、中国共产党第十九次代表大会报告指出，我国经济已由（）阶段转向（）阶段，正处在转变发展方式、优化经济结构、转换增长动力的攻关期，建设现代化经济体系是跨越关口的迫切要求和我国发展的战略目标。</p>
        <mt-radio
          title=""
          v-model="formData.question1"
          :options="['optionA', 'optionB', 'optionC']">
        </mt-radio>
      </div>
    </div>

    <div class="choice">
      <h2>二、多选题</h2>
      <div class="single-box">
        <p>7、根据有关旅游法规，下列导游人员的行为中，属于由省、自治区、直辖市人民政府旅游行政管理部门吊销导游证并予以公告的有（）。</p>
        <mt-checklist
          title="checkbox list"
          v-model="formData.question2"
          :options="['optionA', 'optionB', 'optionC']">
        </mt-checklist>
      </div>
    </div>

    <div class="choice">
      <h2>三、判断题</h2>
      <div class="single-box">
        <p>1、中国共产党第十九次代表大会报告指出，我国经济已由（）阶段转向（）阶段，正处在转变发展方式、优化经济结构、转换增长动力的攻关期，建设现代化经济体系是跨越关口的迫切要求和我国发展的战略目标。</p>
        <mt-radio
          title=""
          v-model="formData.question3"
          :options="['正确', '错误']">
        </mt-radio>
      </div>
    </div>

    <mt-button type="primary" @click="submit" style="display: block; width: 80%; margin: .3rem auto;">交卷</mt-button>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  components: {
  },
  data () {
    return {
      formData: {
        question2: []
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    submit () {
      console.log(this.formData)
      Toast('题没做完，不能交卷')
    }
  }
}
</script>
<style lang='scss'>
  .exam-box {
    padding: .15rem;
    font-size: .15rem;
    .exam_note {
      line-height: .22rem;
      padding-bottom: .2rem;
      border-bottom: 1px solid #ccc;
    }
    .choice {
      font-size: .16rem;
      line-height: .25rem;
    }
  }
</style>