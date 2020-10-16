import Vue from 'vue'
import Vuex from 'vuex'
import { setLearnList, getLearnList, setExamInfo, getExamInfo, getUserInfo, setUserInfo } from 'utils/storage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    learnList: getLearnList() || [],
    examInfo: getExamInfo() || {},
    userInfo: getUserInfo() || {}
  },
  mutations: {
    setLearnList (state, list) {
      state.learnList = list
      setLearnList(list)
    },
    setExamInfo (state, info) {
      state.examInfo = info
      setExamInfo(info)
    },
    setUserInfo (state, info) {
      state.userInfo = info
      setUserInfo(info)
    }
  }
})

export default store