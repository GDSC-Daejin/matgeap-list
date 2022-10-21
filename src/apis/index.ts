import axios from 'axios';

class Apis {
  private API = 'https://openapi.naver.com/v1/search/local';
  private HEADER = {
    headers: {
      'X-Naver-Client-Id': 'NtGjPKomRaFsdpN_0SKn',
      'X-Naver-Client-Secret': '4Ia8Ott8p_',
    },
  };

  getSearchResults = (query: string) =>
    axios.get(`${this.API}?query=${query}`, this.HEADER);
}
export default new Apis();
