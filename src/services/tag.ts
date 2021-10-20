/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 13:50:38
 * @LastEditTime: 2021-10-19 14:07:34
 * @FilePath: \Developmente:\Joints\Project\blog\src\services\tag.ts
 */
import { request } from 'umi'

export async function queryTag() {
  return await request('/v1/tags')
}
