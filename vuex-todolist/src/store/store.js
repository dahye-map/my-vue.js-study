import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


// store 라는 변수는 다른데서 사용 가능
export const store = new Vuex.Store({
  state: {
    headerText: "TODO it!",
    todoItems: []
  }
})