<template>
  <div >
    <p>clicked {{count}} times, count is {{evenOrOdd}} </p>
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <button @click="incrementIfOdd">increment if odd</button>
     <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
   methods:{
     ...mapMutations(['increment','decrement']),
     ...mapActions(['incrementIfOdd','incrementAsync'])
   }
  // methods:{
  //   increment(){
  //   this.$store.commit('increment')
  //   },
  //   decrement(){
  //     this.$store.commit('decrement')
  //   },
  //   incrementIfOdd () {
  //     this.$store.dispatch('incrementIfOdd')
  //   },
  //   incrementAsync () {
  //     this.$store.dispatch('incrementAsync')
  //   },
  // }
  
}
</script>

<style>
 
</style>
