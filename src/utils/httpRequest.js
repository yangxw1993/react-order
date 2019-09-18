import axios from 'axios';
export default function httpRequest (options){
  const defaultConfig = {
    baseURL: 'http://localhost:8888/',
    header: {
      'content-type': 'application/json', // 请求体类型默认值
    },
    method: 'get'
  };
  Object.assign(defaultConfig, options)
  return new Promise((resolve, reject) => {
    axios(defaultConfig).then(res => {
      res.status === 200 ? resolve(res.data) : reject(new Error(res.data.msg))
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}
