/* 管理间接更新数据的方法的对象 */
import axios from 'axios'
import {
  SEARCHING,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from './mutation_types'

export default {
  
 async searchAsync({commit},searchName){
    commit(SEARCHING)
    try {
      const response = await axios({
       url:'https://api.github.com/search/users',
       params:{
         q:searchName
       }
     })
       const result = response.data
       const users = result.items.map(item=>({
         username :item.login,
         url : item.html_url,
         avatar_url :item.avatar_url
       }))

       commit(SEARCH_SUCCESS,users)
     
    } catch (error) {
      commit(SEARCH_ERROR,error.message)

    }
  }

}