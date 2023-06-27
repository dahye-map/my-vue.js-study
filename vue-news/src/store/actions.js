import { fetchList, fetchUserInfo, fetchItemInfo } from '@/api';

export default {
  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error)
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const response = await fetchItemInfo(id);
      commit('SET_ITEM', response.data);
      return response;
    } catch (error) {
      console.log(error)
    }
  },
  async FETCH_LIST({ commit } , pageName) {
    try {
      const response = await fetchList(pageName)
      commit('SET_LIST', response.data);
      return response;
    } catch (error) {
      console.log(error)
    }
  }
}