/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-17 15:47:33
 * @LastEditTime: 2021-10-17 16:56:25
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\list\Context.ts
 */
import type { Context } from 'react'

import { createContext } from 'react'

export interface ListContextState {
  gutter?: number[]
  listCunt?: number
}

const ListContext: Context<ListContextState> = createContext({})

export default ListContext
