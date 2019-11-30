const BASE_URL = 'http://localhost:3001';
const SUCCESS_CODE = 0;
const API_URL = {
  /**
   * 用户
   */
  REGISTER: `${BASE_URL}/user/register`,
  LOGIN: `${BASE_URL}/user/login`,

  /**
   * 商品
   */
  ADD_GOODS:`${BASE_URL}/goods/addGoods`
};

export  {
  SUCCESS_CODE,
  API_URL
}
