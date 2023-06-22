<template>
  <div>
    <p v-for="job in this.$store.state.jobs" v-bind:key="job.title">
      <a :href=job.url>
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    //dispatch 는 vuex actions를 받아오는 함수
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>