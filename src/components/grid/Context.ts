/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-17 15:47:33
 * @LastEditTime: 2021-10-18 15:56:34
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\grid\Context.ts
 */
import type { Context } from 'react'

import { createContext } from 'react'

export interface GridContextState {
  gutter?: number[]
}

const GridContext: Context<GridContextState> = createContext({})

export default GridContext
