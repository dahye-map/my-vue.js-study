<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput 
      v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v-on:내려받을 아이템="사용할 메서드" -->
    <TodoList 
        v-bind:propsdata="todoItems" 
        v-on:removeItem="removeOneItem" 
        v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter
      v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoitem) {
      var obj = {completed: false, item: todoitem};
      // 저장하는 로직
      //obj 해당 값이 string 으로 들어간다.
      localStorage.setItem(todoitem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for(var i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // string 타입을 객체처럼 변경
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #ebf9fc;
  padding: 0 2rem;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.3);
}
</style>
