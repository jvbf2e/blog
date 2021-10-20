/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 11:24:21
 * @LastEditTime: 2021-10-19 11:02:19
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\article\[id]\model.ts
 */
import type { Effect, Reducer, Subscription } from 'umi'
import type { ObjType } from '@/common/type'
import type { ListItemProps } from '@/components'

import { query } from './service'

export interface ArticleModelState extends ListItemProps {
  context: ''
}

export interface ArticleModelType {
  namespace: 'article'
  state: ArticleModelState
  effects: {
    query: Effect
  }
  reducers: {
    save: Reducer<ArticleModelState>
    reset: () => ArticleModelState
  }
  subscriptions: ObjType<Subscription>
}

const getDefaultState = (): ArticleModelState => ({
  id: '',
  avatar: '',
  tags: [],
  time: 0,
  title: '',
  synopsis: '',
  browses: 0,
  feature: '',
  path: '',
  context: ''
})

const ArticleModel: ArticleModelType = {
  namespace: 'article',
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

export default ArticleModel
