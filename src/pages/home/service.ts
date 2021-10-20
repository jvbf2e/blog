/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 17:27:28
 * @LastEditTime: 2021-10-19 14:50:03
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\home\service.ts
 */
import { request }  from 'umi'

export async function query() {
  return await request('/v1/homes')
}
