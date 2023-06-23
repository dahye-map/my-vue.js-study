<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-desc">
        <p>
          {{ userInfo.id }}
        </p>
        <p class="time">{{ userInfo.created }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style scoped>
.user-container {
  display:flex;
  align-items:center;
  padding: 0.5rem;
}
.fa-user {
  font-size:2.5rem;
}
.user-desc {
  padding-left:8px;
}
.user-desc .time {
  font-size: .7rem;
}
</style>