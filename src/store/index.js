import Vue from 'vue'
import Vuex from 'vuex'
import { setLearnList, getLearnList } from 'utils/storage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    learnList: getLearnList() || []
  },
  mutations: {
    setLearnList (state, list) {
      state.learnList = list
      setLearnList(list)
    }
  }
})

export default store