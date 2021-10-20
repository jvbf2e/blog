/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 11:24:21
 * @LastEditTime: 2021-10-19 14:02:17
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\article\[id]\service.ts
 */
import { request }  from 'umi'

type queryType = {
  id: string
}
export async function query(params: queryType) {
  return await request(`/v1/articles/${params.id}`)
}
