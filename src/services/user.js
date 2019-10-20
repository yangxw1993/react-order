import httpRequest from '../utils/httpRequest'
import { API_URL, SUCCESS_CODE } from '../const'

const register = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.REGISTER,
      method: 'post',
      data:data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};
/**
 * 登录
 * @param data
 * @returns {Promise}
 */
const login = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.LOGIN,
      method: 'post',
      data:data,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};

export  {
  register,
  login
}
