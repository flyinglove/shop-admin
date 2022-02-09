import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import store from '@/store'
import router from '@/router/'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

let isRefreshing = false

// 请求拦截器
request.interceptors.request.use((config) => {
  // 统一设置用户token
  const user = store.state.user
  if (user && user.token) {
    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use((response) => {
  const status = response.data.status
  if (!status || status === 200) {
    return response
  }
  if (status === 41000) {
    if (isRefreshing) return
    isRefreshing = true
    // 清除过期登录状态
    // 跳转登录(弹窗提示)
    ElMessageBox.confirm('您的登录已过期， 您可以重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      store.commit('setUser', null)
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
    }).finally(() => {
      isRefreshing = false
    })
    // 抛出异常
    return Promise.reject(response)
  }
  ElMessage.error(response.data.msg || '请求失败， 稍后重试')
  // 统一处理接口响应异常, eg: token过期， 服务端异常等等
  // if (response.data.status && response.data.status !== 200) {
  //   ElMessage.error(response.data.msg || '请求失败， 稍后重试')
  //   return Promise.reject(response.data)
  // }
  return response
}, (error) => {
  return Promise.reject(error)
})

export default <T=any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return (res.data.data || res.data) as T
  })
}
