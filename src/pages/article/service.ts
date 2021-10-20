/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-19 11:03:32
 * @LastEditTime: 2021-10-19 13:57:21
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\article\service.ts
 */
import { request } from 'umi'

type queryType = {
  id: string
}
export async function query(params: queryType) {
  return await request('/v1/articles', { params })
}
