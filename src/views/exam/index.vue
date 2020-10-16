<template>
  <div class="exam-box">
    <div class="exam_note">
      <h2>注意事项：</h2>
      1.本试卷共45题，其中单选20题/2分，多选10题/3分，判断15题/2分，合计100分；<br>
      2.导游员在规定时间内完成网上课件学习并完成测试试题，测试成绩达80分即通过2020年度导游培训。在线考试若未达80分，导游需要再次参与考试，直至通过；
    </div>

    <div class="choice">
      <h2>一、单选题</h2>
      <div class="single-box" v-for="(item, idx) in singleList" :key="idx">
        <p>{{idx + 1}}、{{item.stem}}</p>
        <mt-radio
          title=""
          style="margin: .2rem 0;"
          v-model="formData[item.uuid]"
          :options="getOptions(item)">
        </mt-radio>
      </div>
    </div>

    <div class="choice">
      <h2>二、多选题</h2>
      <div class="single-box" v-for="(item, idx) in multipleList" :key="idx">
        <p>{{idx + 1}}、{{item.stem}}</p>
        <mt-checklist
          title=""
          style="margin: .2rem 0;"
          v-model="multipleFormData[item.uuid]"
          :options="getOptions(item)">
        </mt-checklist>
      </div>
    </div>

    <div class="choice">
      <h2>三、判断题</h2>
      <div class="single-box" v-for="(item, idx) in judgmentList" :key="idx">
        <p>{{idx + 1}}、{{item.stem}}</p>
        <mt-radio
          title=""
          style="margin: .2rem 0;"
          v-model="formData[item.uuid]"
          :options="getOptions(item)">
        </mt-radio>
      </div>
    </div>

    <mt-button type="primary" @click="submit" style="display: block; width: 80%; margin: .3rem auto;">交卷</mt-button>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { getExamList } from 'api/exam';

export default {
  components: {
  },
  data () {
    return {
      singleList: [],
      multipleList: [],
      judgmentList: [],
      formData: {},
      multipleFormData: {}
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.getExamListFunc()
  },
  methods: {
    getExamListFunc () {
      getExamList({
        cardNo: localStorage.getItem('cardNo')
      }).then(res => {
        if (res.code === '200') {
          const list = res.data || []
          const singleList = [], multipleList = [], judgmentList = []
          const multipleFormData = {}

          for (let i of list) {
            if (i.type === '单选') {
              singleList.push(i)
            } else if (i.type === '多选') {
              multipleList.push(i)
            } else if (i.type === '判断') {
              judgmentList.push(i)
            }
          }

          for (let i of multipleList) {
            multipleFormData[i.uuid] = []
          }

          this.multipleFormData = multipleFormData
          this.singleList = singleList
          this.multipleList = multipleList
          this.judgmentList = judgmentList
        }
      })
    },
    getOptions (item) {
      if (!item) return
      const { optiona, optionb, optionc, optiond, optione } = item
      const arr = [
        {
          label: optiona ? 'A.' + optiona : '',
          value: 'A'
        },
        {
          label: optionb ? 'B.' + optionb : '',
          value: 'B'
        },
        {
          label: optionc ? 'C.' + optionc : '',
          value: 'C'
        },
        {
          label: optiond ? 'D.' + optiond : '',
          value: 'D'
        },
        {
          label: optione ? 'E.' + optione : '',
          value: 'E'
        }
      ]
      const options = []

      for (let i of arr) {
        if (i.label) {
          options.push(i)
        }
      }

      return options
    },
    submit () {
      if (Object.keys(this.formData).length < this.singleList.length + this.judgmentList.length || !this.hasDoneMultiple()) {
        Toast('题没做完，不能交卷')
        return
      }

      const list = []
      for (let i in this.formData) {
        list.push({
          uuid: i,
          answer: this.formData[i]
        })
      }
      for (let i in this.multipleFormData) {
        list.push({
          uuid: i,
          answer: this.multipleFormData[i].join(',')
        })
      }

      this.submitData(list)
    },
    submitData (list) {
      console.log(list)
    },
    hasDoneMultiple () {
      for (let i in this.multipleFormData) {
        if (this.multipleFormData[i].length <= 0) {
          return false
        }
      }
      return true
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