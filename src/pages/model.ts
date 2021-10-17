/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 17:22:16
 * @LastEditTime: 2021-10-17 17:53:40
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\model.ts
 */
import type { Effect, Reducer, Subscription } from 'umi'
import type { ObjType } from '@/common/type'
import type { ListItemProps } from '@/components'

import { query } from './service'

type BannerType = {
  img: string
  title: string
  msg: string
}

export interface IndexModelState {
  list: ListItemProps[]
  banner: BannerType
}

export interface IndexModelType {
  namespace: 'index'
  state: IndexModelState
  effects: {
    query: Effect
  }
  reducers: {
    save: Reducer<IndexModelState>
    reset: () => IndexModelState
  }
  subscriptions: ObjType<Subscription>
}

const getDefaultState = (): IndexModelState => ({
  list: [],
  banner: {
    img: '',
    title: '',
    msg: ''
  }
})

const IndexModel: IndexModelType = {
  namespace: 'index',
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
      const { code, data: res } = yield call(query)
      if (code === 200) {
        yield put({
          type: 'save',
          payload: res
        })
      }
    }
  },
  subscriptions: {}
}

export default IndexModel
