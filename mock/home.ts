/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 17:12:14
 * @LastEditTime: 2021-10-15 17:44:32
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
        'list|1-10': [
          {
            id: '@guid()',
            title: '@cname()',
            time: '@datetime()'
          }
        ]
      }
    })
    return res.json(json)
  }
}
