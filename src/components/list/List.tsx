/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-11 17:11:53
 * @LastEditTime: 2021-10-17 17:07:28
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\list\List.tsx
 */
import type { CSSProperties } from 'react'
import type { UmiComponentProps } from '@/common/type'

import React from 'react'
import classNames from 'classnames'
import { tuple, tupleNum } from '@/common/type'
import ListContext from './Context'

import styles from './List.less'

const Direction = tuple('row', 'column')
const ListCunt = tupleNum(2, 3, 4, 6, 8, 12)

export interface ListProps extends UmiComponentProps {
  direction?: typeof Direction[number]
  gutter?: number | number[]
  listCunt?: typeof ListCunt[number]
}

const List = (props: ListProps) => {
  const { children, direction, gutter, listCunt } = props

  // ===== Render =====
  const classes = () => {
    const rows = [styles.list]
    if (direction) {
      rows.push(styles[direction])
    }
    return rows
  }

  const getGutter = (): [number, number] => {
    const results: [number, number] = [0, 0]
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0]
    normalizedGutter.forEach((g, index) => {
      results[index] = g || 0
    })
    return results
  }
  const gutters = getGutter()
  const rowStyle: CSSProperties = {}
  const horizontalGutter = gutters[0] > 0 ? gutters[0] / -2 : undefined
  const verticalGutter = gutters[1] > 0 ? gutters[1] / -2 : undefined
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter
    rowStyle.marginRight = horizontalGutter
  }
  if (verticalGutter) {
    rowStyle.rowGap = gutters[1]
  }

  const listContext = React.useMemo(() => ({ gutter: gutters, listCunt: listCunt }), [gutters, listCunt])

  return (
    <ListContext.Provider value={listContext}>
      <div className={classNames(classes())} style={{ ...rowStyle }}>
        {children}
      </div>
    </ListContext.Provider>
  )
}

export default List
