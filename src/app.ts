/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-15 14:22:32
 * @LastEditTime: 2021-10-19 14:17:32
 * @FilePath: \Developmente:\Joints\Project\blog\src\app.ts
 */
import type { RequestConfig } from 'umi'

import config from '@/config'
import errorHandler from '@/utils/errorHandle'
import storage from '@/utils/storage'
import { response } from '@umijs/deps/compiled/express'

const key = 'updatable'

export const request: RequestConfig = {
  prefix: config.api,
  timeout: 600000,
  errorHandler,
  middlewares: [],
  requestInterceptors: [(url, options) => {
    const token = storage('localstorage').get('bi-X-Auth-Token')
      options.headers =  token
      ? {
          Authorization: `Bearer ${token}`
        }
      : {}
    return {url, options}
  }],
  responseInterceptors: [ async (response) => {
    try {
      const res = await response.clone().json()
      if (res && (res.status === 402 || res.status === 403)) {
        console.error({
          description: '登录已过期，请重新登录',
          message: '提示',
          key
        })
        storage('localstorage').remove('bi-user_name')
        storage('localstorage').remove('bi-user_password')
        storage('localstorage').remove('bi-X-Auth-Token')
        storage('localstorage').remove('bi-oac_email')
        storage('localstorage').remove('bi-oac_url')
        window.location.href = '/'
      }
    } catch (error) {
      throw error
    }
    return response.clone().json().then(res => {
      return res.data
    })
  }],
};
