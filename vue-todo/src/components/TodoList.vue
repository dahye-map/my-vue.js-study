<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="todo-list shadow">
        <span class="btn-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"><i class="fas fa-check"></i></span>
        <span v-bind:class="{todotxtcomplete: todoItem.completed}" class="todotxt">{{ todoItem.item }}</span>
        <span class="btn-remove" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    },
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      // 로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
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
  }
}
</script>

<style scoped>
.todo-list {
  background-color: #fff;
  font-size: 1.6rem;
  padding: 0 2rem;
  margin: 1.6rem 0;
  border-radius: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todotxt {
  text-align: left;
  margin-left: 2rem;
  flex: 1;
}
.todotxtcomplete {
  color:#ccc;
  text-decoration: line-through;
}
</style>