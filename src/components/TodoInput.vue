<template>
  <div class="input-box shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span v-on:click="addTodo" class="btn-add"><i class="fas fa-plus"></i></span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
        특정 컴포넌트에 재정의 가능 : slot
      -->
      <h3 slot="header">경고!</h3>
      <div slot="body">무언가를 입력하세요.</div>
      <div slot="footer">
        copyright
        <button class="modal-default-button" @click="$emit('close')">
          OK
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data: function() {
    return {
      //데이터 연동
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo: function() {
      // newTodoItem이 무조건 값이 있을 때
      if(this.newTodoItem !== '') {
        //상위로 보냄
        this.$emit("addTodoItem", this.newTodoItem)
        this.clearInput();
      } else {
        //값이 없을 때 모달 띄우기
        this.showModal = !this.showModal;
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal: Modal,
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