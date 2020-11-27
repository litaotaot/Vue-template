import axios from 'axios'

const service = axios.create({
  baseURL: '', // process.env.BASE_API,
  timeout: 15000, // 请求超时时间
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false // 不允许携带cookie
})

export default service
