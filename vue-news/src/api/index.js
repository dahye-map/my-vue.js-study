import axios from 'axios';

// http Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// API 함수들을 정리
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItemInfo(itemname) {
  return axios.get(`${config.baseUrl}item/${itemname}.json`);
}

export { fetchList, fetchUserInfo, fetchItemInfo };