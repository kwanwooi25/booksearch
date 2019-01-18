import axios from 'axios';

export default axios.create({
  baseURL: 'https://dapi.kakao.com/v3/search/book',
  headers: {
    Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_APP_KEY}`
  }
});