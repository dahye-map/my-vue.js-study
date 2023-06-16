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
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoitem) {
      // 오버라이딩 안되는 const를 더 선호
      // let은 재할당 가능하니까 const를 더 활용해보자
      const obj = {completed: false, item: todoitem};
      // 저장하는 로직
      //obj 해당 값이 string 으로 들어간다.
      localStorage.setItem(todoitem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // created() {
  //   if(localStorage.length > 0) {
  //     for(var i=0; i<localStorage.length; i++) {
  //       if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //         // string 타입을 객체처럼 변경
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //         // this.todoItems.push(localStorage.key(i));
  //       }
  //     }
  //   }
  // },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
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
