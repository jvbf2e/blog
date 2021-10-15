/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 17:22:16
 * @LastEditTime: 2021-10-15 16:54:37
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\model.ts
 */
import { ObjType } from '@/common/type'
import type { Effect, Reducer, Subscription } from 'umi'

import { query } from './service'

export interface IndexModelState {
  name: string
}

export interface IndexModelType {
  namespace: 'index'
  state: IndexModelState
  effects: {
    query: Effect
  }
  reducers: {
    save: Reducer<IndexModelState>
  }
  subscriptions: ObjType<Subscription>
}

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    name: ''
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  },
  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(query)
      console.log(response)
      console.log(payload)
    }
  },
  subscriptions: {}
}

export default IndexModel
