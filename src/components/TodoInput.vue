<template>
  <div class="input-box shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span v-on:click="addTodo" class="btn-add"><i class="fas fa-plus"></i></span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      //데이터 연동
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function() {
      // newTodoItem이 무조건 값이 있을 때
      if(this.newTodoItem !== '') {
        var obj = {completed: false, item: this.newTodoItem};
        // 저장하는 로직
        //obj 해당 값이 string 으로 들어간다.
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  .input-box {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    overflow: hidden;
    margin-bottom: 4rem;
  }
  .input-box input {
    background-color:#fff;
    padding: 0 1rem;
    height: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    width:calc(100% - 5rem);
  }
  
</style>