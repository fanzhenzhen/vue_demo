/* 一个直接更新数据的方法的对象 */
import {
  SEARCHING,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from './mutation_types'

export default {
 
  [SEARCHING](state){
    state.firstView =false
    state.loading = true

  },
  [SEARCH_SUCCESS](state,users){
    state.loading = false,
    state.users = users
  },
  [SEARCH_ERROR](state,msg){
    state.loading = false,
    state.error = msg
  }
}