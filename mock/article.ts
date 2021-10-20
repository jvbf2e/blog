/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 11:13:55
 * @LastEditTime: 2021-10-19 14:09:03
 * @FilePath: \Developmente:\Joints\Project\blog\mock\article.ts
 */
import type { Request, Response } from 'express'

import Mock from 'mockjs'

import { response } from '../common/index'

export let dataList = [] as any[]
for (let i = 0; i < 53; i++) {
  dataList.push(Mock.mock({
    id: '@guid()',
    avatar: '@image("720x300")',
    'tags|1-3': ['@integer(0, 2)'],
    time: Mock.Random.datetime(),
    title: '@ctitle()',
    synopsis: '@cparagraph()',
    browses: '@integer(0,100)',
    feature: 'Feature',
    context: `<p>${Mock.Random.cparagraph()}</p>`,
    path: '/article'
  }))
}

type Query = {
  page: number,
  pageSize: number
}

export default {
  // 获取所有文章
  'GET /v1/articles': (req: Request, res: Response) => {
    const { page, pageSize } = <Query><unknown>req.query
    const total = dataList.length
    const len = total / pageSize
    const totalPage = len % 1 === 0 ? len : Math.floor(len + 1)
    return res.json(response(200, {
      code: 1,
      data: {
        list: dataList.slice((page - 1) * pageSize, page * pageSize),
        total,
        totalPage: totalPage
      },
      message: '成功',
      sysMsg: 'success'
    }))
  },
  // 获取某个指定文章的信息
  'GET /v1/articles/:id': (req: Request, res: Response) => {
    const { id } = req.params
    if (id) {
      return res.json(response(200, {
        code: 1,
        data: dataList.filter(row => {
          return row.id === id
        }),
        message: '成功',
        sysMsg: 'success'
      }))
    }
    return res.json(response(200, {
      code: 0,
      data: null,
      message: '失败',
      sysMsg: 'error'
    }))
  }
}
