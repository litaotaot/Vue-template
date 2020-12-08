import axios from 'axios'

const service = axios.create({
  baseURL: '', // process.env.BASE_API,
  timeout: 15000, // 请求超时时间
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false // 不允许携带cookie
})

// 请求拦截器
service.interceptors.request.use((config) => {
  console.log(config)
}, (error) => {
  Promise.reject(error)
})

// 请求响应器
service.interceptors.response.use((config) => {

})

export default service
