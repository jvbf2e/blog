/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-12 16:13:37
 * @LastEditTime: 2021-10-12 16:20:28
 * @FilePath: \Developmente:\Joints\Project\blog\src\common\type.ts
 */
import type { Action } from 'redux';
import type { IRouteComponentProps, Route, Location, History } from 'umi';

import { AnyAction } from 'redux';

export interface ObjType<T = any> {
  [key: string]: T;
}

export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): any;
}

export interface LoadingState {
  global: boolean;
  effects: ObjType<boolean>;
}

export interface UmiComponentProps {
  history: History;
  location: Location;
  match: any;
  route: Route;
  routes: Route[];
  dispatch: any;
  children: IRouteComponentProps;
}
