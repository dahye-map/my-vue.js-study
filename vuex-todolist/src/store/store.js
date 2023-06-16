import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(var i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // string 타입을 객체처럼 변경
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

// store 라는 변수는 다른데서 사용 가능
export const store = new Vuex.Store({
  state: {
    headerText: "TODO it!",
    todoItems: storage.fetch()
  }
})