<template>
  <h2 v-if="isSearch">输入关键字进行查询</h2>
  <h2 v-else-if="loading">Loading....</h2>
  <h2 v-else-if="error">{{error}}</h2>
  <div class="row" v-else>
      <div class="card" v-for="(user,index) in users" :key="user.username">
        <a  :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
  export default {
    data(){
      return {
        isSearch:true,
        loading:false,
        error:'',
        users: [],
      }
    },
     mounted(){
     this.$eventBus.$on('search',async(data)=>{
     this.isSearch = false
     this.loading = true
      try {
        const response = await axios({
         url:'https://api.github.com/search/users',
         params:{
           q:data
         }
       })
         const result = response.data
         const users = result.items.map(item=>({
           username :item.login,
           url : item.html_url,
           avatar_url :item.avatar_url
         }))
         this.loading = false
         this.users = users
       
      } catch (error) {
        this.loading = false
        this.error = error.message
      }
   
     })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

 
</style>
