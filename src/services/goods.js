import httpRequest from '../utils/httpRequest'
import { API_URL, SUCCESS_CODE } from '../const'

/**
 * 登录
 * @param data
 * @returns {Promise}
 */
const addGoods = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.ADD_GOODS,
      method: 'post',
      data:data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};

export  {
  addGoods
}
