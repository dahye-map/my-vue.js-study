<template>
  <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item.title">
      <a :href=item.url>
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    //dispatch 는 vuex actions를 받아오는 함수
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>