
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:1
}
const mutations = {
  increment(state){
   state.count++
  },
  decrement(state){
   state.count--
  }
}
const actions = {
  // increment({commit}){
  //  commit('increment')
  // },
  // decrement({commit}){
  //  commit('decrement')
  // },
  incrementIfOdd({commit,state}){
    if (state.count %2===1) {
      commit('increment')   
    }

  },
  incrementAsync({commit}){
   setTimeout(() => {
    commit('increment') 
   }, 1000);
  }
}
const getters = {
  evenOrOdd(state){
    return state.count %2===1 ? '奇数' : '偶数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})