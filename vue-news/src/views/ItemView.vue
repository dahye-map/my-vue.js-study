<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <section>
        <user-profile :info="itemInfo">
          <router-link slot="username" :to="`/user/${itemInfo.user}`">{{ itemInfo.user }}</router-link>
          <div slot="time">{{ "Posted " + itemInfo.time_ago }}</div>
        </user-profile>
      </section>
      <section>
        <h2>{{ itemInfo.title }}</h2>
      </section>
      <section>
        <!-- html 포함되어 있는 것들은 v-html -->
        <div v-html="itemInfo.content"></div>
      </section>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components: { UserProfile },
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

<style>

</style>