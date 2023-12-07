//导入axios
import axios from 'axios'
//配置基地址
const baseURL = "http://47.113.148.158:3062";

export default function request(config) {
  const install = axios.create({
    baseURL,
    timeOut: 2000 //超时时间
  });
  // 响应拦截器
  install.interceptors.response.use(
    request => {
      return request.data
    },
    error => {
      return error
    }

  )
  //请求拦截器
  install.interceptors.request.use(
    data => {
      return data
    },
    error => {
      return error
    }
  )
  return install(config)
}

