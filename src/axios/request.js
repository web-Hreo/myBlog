/**
 * 封装Axios
 * 处理请求、响应错误信息
 */
 import axios from 'axios' // 引用axios
 const service = axios.create({
   baseURL: 'http://localhost:3000/', // 正式环境
   timeout: 1800000, // request timeout
 })
 
 // request interceptor  请求拦截器
 service.interceptors.request.use(
   (config) => {
     return config
   },
   (error) => {
     return Promise.reject(error)
   }
 )
 
 // 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
 
 export default service // 导出封装后的axios
 