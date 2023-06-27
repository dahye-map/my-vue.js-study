<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" v-bind:key="item.title" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <div>
          <template v-if="item.domain">
            <a class="news-title" :href="item.url">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link v-bind:to="`/item/${item.id}`" class="news-title">
              {{ item.title }}
            </router-link>
          </template>
          
          <small>
            {{ item.time_ago }} by 
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    }
  }
}
</script>

<style scoped>
.news-list .post {
  display:flex;
  align-items: center;
  padding:.8rem 1.6rem;
  border-bottom:1px solid #eee;
  
}
.news-list .points {
  width:40px;
  margin-right:.8rem;
  padding:.3rem;
  color:#42b883;
  border:1px solid #ccc;
  border-radius:5px;
  text-align: center;
}
.news-list .news-title {
  text-decoration: none;
  color:#000;
  display: block;
}
.news-list .news-title:hover {
  text-decoration: underline;
  color:#42b883;
}
</style>