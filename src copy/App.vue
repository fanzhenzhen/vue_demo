<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo = "addTodo"/>
      <List :todos = "todos" :updateTodo = "updateTodo" :deleteTodo="deleteTodo" />
      <Footer :todos = "todos" :selectAll="selectAll" :clearAllComplete="clearAllComplete"/>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    List,
    Footer
  },
  data(){
    return {
     todos:[]
    }
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(id){
     this.todos =  this.todos.filter(item=> id!==item.id)
    },
    // 全选/全不选
    selectAll (check) {
      this.todos.forEach(todo => todo.complete = check)
      console.log('todo', this.todos)
    },
    // 清除所有已完成的
    clearAllComplete () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },

    updateTodo(todo, isCheck){
      todo.complete = isCheck
    }
  }
}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
