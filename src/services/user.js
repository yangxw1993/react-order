import httpRequest from '../utils/httpRequest'

const register = () => {
  return new Promise((resolve, reject) => {
    httpRequest({
      url:'/test'
    }).then(res => {
      resolve(res);
    })
  })
}
export  {
  register
}
