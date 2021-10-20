/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-14 17:22:16
 * @LastEditTime: 2021-10-19 10:54:01
 * @FilePath: \Developmente:\Joints\Project\blog\src\pages\home\model.ts
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

export interface HomeModelState {
  list: ListItemProps[]
  banner: BannerType
}

export interface HomeModelType {
  namespace: 'home'
  state: HomeModelState
  effects: {
    query: Effect
  }
  reducers: {
    save: Reducer<HomeModelState>
    reset: () => HomeModelState
  }
  subscriptions: ObjType<Subscription>
}

const getDefaultState = (): HomeModelState => ({
  list: [],
  banner: {
    img: '',
    title: '',
    msg: ''
  }
})

const HomeModel: HomeModelType = {
  namespace: 'home',
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

export default HomeModel
