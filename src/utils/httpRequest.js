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
  return axios(defaultConfig)
}
