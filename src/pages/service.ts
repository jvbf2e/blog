/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 17:27:28
 * @LastEditTime: 2021-10-17 11:21:39
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\service.ts
 */
import { request } from 'umi'

export async function query() {
  return await request('home')
}
