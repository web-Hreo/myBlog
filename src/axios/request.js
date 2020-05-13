import axios from 'axios';
import QS from 'qs';
import '../element/tips'



// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//  getData方法，对应get请求
//  @param {String} url [请求的url地址]  @param {Object} params [请求时携带的参数]
export const get = ((url, params) => {
  // loading('数据加载中')
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  });
})

//  postData方法，对应post请求
//  @param {String} url [请求的url地址]  @param {Object} params [请求时携带的参数]
export const post = ((url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  });
})