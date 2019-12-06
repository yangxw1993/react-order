import httpRequest from '../utils/httpRequest'
import { API_URL, SUCCESS_CODE } from '../const'


const init = () => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url: API_URL.INIT,
    }).then(res => {
      res.code === SUCCESS_CODE ? resolve(res.data) : reject(new Error(res.msg));
    }).catch(err => reject(new Error(err.message)))
  })
};

export  {
  init
}
