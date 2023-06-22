import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '@/api';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        console.log(response.data);
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => console.log(error))
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      // .then(response => {
      //   console.log(response.data);
      //   context.commit('SET_ASK', response.data)
      // })
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => console.log(error))
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => {
        console.log(response.data);
        context.commit('SET_JOBS', response.data)
      })
      .catch(error => console.log(error))
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => console.log(error))
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => console.log(error))
  }
}