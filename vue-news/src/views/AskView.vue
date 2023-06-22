<template>
  <div><p v-for="item in this.$store.state.ask" v-bind:key="item.title">
      <!-- <a :href=item.url>
        {{ item.title }}
      </a> -->
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>export default {
  created() {
    //dispatch 는 vuex actions를 받아오는 함수
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>