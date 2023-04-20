import axios from 'axios'

let baseURL: string = ""
if( process.env.NODE_ENV === 'production' ) {
    // baseURL = 'https://devadmin.alphalawyer.cn'
} else {
    // baseURL = 'https://devadmin.alphalawyer.cn'
}

const api = axios.create({
  baseURL,
  timeout: 60000
})

// 拦截器
api.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response?.data
  }
}, (error) => {
    return Promise.reject(error)
})

api.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error)
})

export default api