/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 17:12:14
 * @LastEditTime: 2021-10-17 17:54:39
 * @FilePath: \Developmente:\Joints\Project\blog\mock\home.ts
 */
import type { Request, Response } from 'express'

import Mock from 'mockjs'

export default {
  // 支持值为 Object 和 Array
  '/home': (req: Request, res: Response) => {
    const json = Mock.mock({
      code: 200,
      msg: 'success',
      data: {
        banner: {
          img: '@image("1920x900")',
          title: '@title()',
          msg: '@paragraph()'
        },
        'list|10': [
          {
            id: '@guid()',
            avatar: '@image("300x250")',
            'tags|1-3': ['@integer(0, 2)'],
            time: '@datetime()',
            title: '@title()',
            synopsis: '@paragraph()',
            browses: '@integer(0,100)',
            feature: 'Feature',
            path: '/'
          }
        ]
      }
    })
    return res.json(json)
  }
}
