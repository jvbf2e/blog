/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 17:12:14
 * @LastEditTime: 2021-10-19 14:15:20
 * @FilePath: \Developmente:\Joints\Project\blog\mock\home.ts
 */
import type { Request, Response } from 'express'

import Mock from 'mockjs'

import { response } from '../common/index'
import { dataList } from './article'

export default {
  // 支持值为 Object 和 Array
  'GET /v1/homes': (req: Request, res: Response) => {
    return res.json(response(200, {
      code: 1,
      data: Mock.mock({
        banner: {
          img: '@image("1920x900")',
          title: '@title()',
          msg: '@paragraph()'
        },
        list: dataList.splice(0, 10)
      }),
      message: '成功',
      sysMsg: 'success'
    }))
  }
}
