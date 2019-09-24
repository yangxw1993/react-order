import httpRequest from '../utils/httpRequest'
import { API_URL } from '../const'

const register = (data) => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.REGISTER,
      method: 'post',
      data,
    }).then(res => {
      res.code === API_URL.SUCCESS_CODE ? resolve(res) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
}
export  {
  register
}
