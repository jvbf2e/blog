/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 13:46:04
 * @LastEditTime: 2021-10-18 13:59:32
 * @FilePath: \Developmente:\Joints\Project\blog\src\models\global.ts
 */
import type { Effect, Reducer, Subscription } from 'umi'
import type { ObjType } from '@/common/type'
import { queryTag } from '@/services/tag'

export interface GlobalModelState {
  tags: number[] | never[]
}

export interface GlobalModelType {
  namespace: 'global'
  state: GlobalModelState
  effects: {
    queryTag: Effect
  }
  reducers: {
    saveTag: Reducer<GlobalModelState>
    resetTag: () => GlobalModelState
  }
  subscriptions: ObjType<Subscription>
}

const getDefaultState = (): GlobalModelState => ({
  tags: []
})

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: getDefaultState(),
  reducers: {
    saveTag(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    resetTag: getDefaultState
  },
  effects: {
    *queryTag({ payload }, { call, put }) {
      const { code, data: res } = yield call(queryTag)
      if (code === 200) {
        yield put({
          type: 'saveTag',
          payload: { tags: res }
        })
      }
    }
  },
  subscriptions: {}
}

export default GlobalModel
