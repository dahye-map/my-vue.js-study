<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-desc">
          <router-link :to="`/user/${itemInfo.user}`">{{ itemInfo.user }}</router-link>
          <p class="time">{{ itemInfo.time_ago }}</p>
        </div>
      </div>
      <h2>{{ itemInfo.title }}</h2>
      
      <!-- html 포함되어 있는 것들은 v-html -->
      <div v-html="itemInfo.content"></div>
    </section>

    <section>
      <!-- 질문 댓글 -->
      
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const itemName = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemName);
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