/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 13:51:41
 * @LastEditTime: 2021-10-19 14:09:11
 * @FilePath: \Developmente:\Joints\Project\blog\mock\tag.ts
 */
import type { Request, Response } from 'express'

import { response } from '../common/index'

export default {
  'GET /v1/tags': (req: Request, res: Response) => {
    return res.json(response(200, {
      code: 1,
      data: [
        {
          key: 0,
          label: 'HTML',
          value: 1
        },
        {
          key: 1,
          label: 'JavaScript',
          value: 2
        },
        {
          key: 2,
          label: 'CSS',
          value: 3
        },
        {
          key: 3,
          label: 'TypeScropt',
          value: 4
        },
        {
          key: 4,
          label: 'Vue',
          value: 5
        },
        {
          key: 5,
          label: 'React',
          value: 6
        },
        {
          key: 6,
          label: 'Nodejs',
          value: 7
        },
        {
          key: 7,
          label: 'Umi',
          value: 8
        },
        {
          key: 8,
          label: 'UI',
          value: 9
        }
      ],
      message: '成功',
      sysMsg: 'success'
    }))
  }
}
