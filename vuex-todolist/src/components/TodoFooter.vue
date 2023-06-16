<template>
  <div>
    <span class="btn-clear" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit('clearAllItems')
    }
  }
}
</script>

<style scoped>
.btn-clear {
  display: inline-block;
  height: 5rem;
  line-height: 5rem;
  margin-top: 2rem;
  background:#fff;
  border-radius: .5rem;
  padding:0 2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color:#ff0000;
}
</style>