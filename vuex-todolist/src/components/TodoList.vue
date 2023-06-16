<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.todoItems" v-bind:key="todoItem.item" class="todo-list shadow">
        <span class="btn-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"                v-on:click="toggleComplete(todoItem, index)"><i class="fas fa-check"></i></span>
        <span v-bind:class="{todotxtcomplete: todoItem.completed}" class="todotxt">{{ todoItem.item }}</span>
        <span class="btn-remove" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash"></i></span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(todoItem, index) {
      this.$store.commit('removeOneItem', {todoItem, index})
    },
    toggleComplete(todoItem, index) {
      this.$store.commit('toggleOneItem', {todoItem, index})
    },
  },
  computed: {
    todoItems() {
      return this.$store.getters.storedTodoItems;
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

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>