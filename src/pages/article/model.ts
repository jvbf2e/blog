/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-19 11:03:46
 * @LastEditTime: 2021-10-19 11:17:40
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\article\model.ts
 */
import type { Effect, Reducer, Subscription } from 'umi'
import type { ObjType } from '@/common/type'
import type { ListItemProps } from '@/components'

import { query } from './service'

export interface ArticleListModelState {
  list: ListItemProps[]
  total: number
  totalPage: number
}

export interface ArticleListModelType {
  namespace: 'articleList'
  state: ArticleListModelState
  effects: {
    query: Effect
  }
  reducers: {
    save: Reducer<ArticleListModelState>
    reset: () => ArticleListModelState
  }
  subscriptions: ObjType<Subscription>
}

const getDefaultState = (): ArticleListModelState => ({
  list: [],
  total: 0,
  totalPage: 0
})

const ArticleListModel: ArticleListModelType = {
  namespace: 'articleList',
  state: getDefaultState(),
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    reset: getDefaultState
  },
  effects: {
    *query({ payload }, { call, put }) {
      const { code, data: res } = yield call(query, { ...payload })
      if (code === 1) {
        yield put({
          type: 'save',
          payload: res
        })
      }
    }
  },
  subscriptions: {}
}

export default ArticleListModel
