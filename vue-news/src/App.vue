<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
    }
  }, 
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start spinner', this.startSpinner);
    bus.$on('end spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start spinner', this.startSpinner);
    bus.$off('end spinner', this.endSpinner);
  }
}

</script>

<style>
html,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
select,
table,
td,
textarea,
th,
ul {
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  -webkit-appearance: none;
}

/* Router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
