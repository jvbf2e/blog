/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-15 14:22:32
 * @LastEditTime: 2021-10-15 17:17:02
 * @FilePath: \Developmente:\Joints\Project\blog\src\app.ts
 */
import type { RequestConfig } from 'umi'

import config from '@/config'
import errorHandler from '@/utils/errorHandle'

export const request: RequestConfig = {
  prefix: process.env.NODE_ENV === 'production' ? config.baseurl : 'api/',
  credentials: 'include',
  errorHandler,
  // 自定义端口规范
  errorConfig: {
    adaptor: (res) => {
      console.log(res)
      return {
        success: res.code === config.successCode,
        data: res.data,
        errorCode: res.code,
        errorMessage: res.msg
      }
    }
  },
  middlewares: []
}
