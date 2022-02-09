// 公共接口封装
import request from '@/utils/request'
import type { ILoginInfo, ILoginResponse } from './types/common'
// interface ResponseData<T> {
//     status: number
//     msg: string
//     data: T
// }

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    responseType: 'blob',
    params: {
      stamp: Date.now()
    }
  })
}

export const login = (data: {
  account: string,
  pwd: string,
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const logout = () => {
  return request<ILoginResponse>({
    method: 'GET',
    url: '/setting/admin/logout'
  })
}
