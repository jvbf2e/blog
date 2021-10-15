/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-12 16:13:37
 * @LastEditTime: 2021-10-15 16:31:59
 * @FilePath: \Developmente:\Joints\Project\blog\src\common\type.ts
 */
import type { IRouteComponentProps, Route, Location, History, Dispatch } from 'umi'

export interface ObjType<T = any> {
  [key: string]: T
}

export interface LoadingState {
  global: boolean
  effects: ObjType<boolean>
}

export interface UmiComponentProps {
  children: IRouteComponentProps
  history: History
  location: Location
  match: any
  route: Route
  routes: Route[]
  dispatch: Dispatch
}

export const tuple = <T extends string[]>(...args: T) => args

export const tupleNum = <T extends number[]>(...args: T) => args
