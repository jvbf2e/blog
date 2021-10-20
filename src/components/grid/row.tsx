/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 14:46:35
 * @LastEditTime: 2021-10-18 15:58:21
 * @FilePath: \Developmente:\Joints\Project\blog\src\components\grid\row.tsx
 */
import type { CSSProperties } from 'react'
import type { UmiComponentProps } from '@/common/type'

import React from 'react'
import classNames from 'classnames'
import { tuple } from '@/common/type'
import GridContext from './Context'

import styles from './row.less'

const Direction = tuple('row', 'column')

export interface RowProps extends UmiComponentProps {
  direction?: typeof Direction[number]
  gutter?: number | number[]
}

const Row = (props: RowProps) => {
  const { children, direction = 'row', gutter = 0 } = props

  // ===== Render =====
  const classes = () => {
    const rows = [styles.flex]
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

  const gridContext = React.useMemo(() => ({ gutter: gutters }), [gutters])

  return (
    <GridContext.Provider value={gridContext}>
      <div className={classNames(classes())} style={{ ...rowStyle }}>
        {children}
      </div>
    </GridContext.Provider>
  )
}

export default Row
