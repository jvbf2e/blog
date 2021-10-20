/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-19 13:37:37
 * @LastEditTime: 2021-10-19 13:45:12
 * @FilePath: \Developmente:\Joints\Project\blog\mock\index.ts
 */
export const response = (code, data) => {
  let message = ''
  let sysMsg = ''
  switch (code) {
    case 400:
      message = '错误的请求'
      sysMsg = 'Bad Request'
      break

    case 401:
      message = '未经授权'
      sysMsg = 'Unauthorized'
      break

    case 403:
      message = '被禁止的'
      sysMsg = 'Forbidden'
      break

    case 404:
      message = '找不到'
      sysMsg = 'Not Found'
      break

    case 500:
      message = '内部服务器错误'
      sysMsg = 'Internal Server Error'
      break

    default:
      message = '成功'
      sysMsg = 'success'
      break
  }
  return {
    status: code,
    data,
    message,
    sysMsg
  }
}
