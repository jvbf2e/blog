/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-15 14:46:44
 * @LastEditTime: 2021-10-15 14:54:20
 * @FilePath: \Developmente:\Joints\Project\blog\src\api\index.ts
 */
import { request } from 'umi'

export const getNews = async () => {
  return await request('home')
}
